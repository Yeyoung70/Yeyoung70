package yeyoung.jussback.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import yeyoung.jussback.api.dto.request.TransferRequestDto;
import yeyoung.jussback.api.dto.response.AccountListResponseDto;
import yeyoung.jussback.api.dto.response.AccountResponseDto;
import yeyoung.jussback.api.dto.response.CardListResponseDto;
import yeyoung.jussback.api.dto.response.ToPayResponseDto;
import yeyoung.jussback.api.dto.response.TokenResponseDto;
import yeyoung.jussback.api.dto.response.TransactionListResponseDto;
import yeyoung.jussback.api.dto.response.TransactionResponseDto;
import yeyoung.jussback.api.dto.response.UsedMoneyResponseDto;
import yeyoung.jussback.api.service.ApiService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Slf4j
public class ApiController {
    
    private final ApiService apiService; // = new ApiService();

    @PostMapping("/start")
    public TokenResponseDto startJuss() {
        log.debug(">>> start api 호출");


        return apiService.startJuss();
        
    }
    
  @GetMapping("/accounts")
  public AccountListResponseDto getAccounts(
                                  @RequestHeader("Authorization") String token,
                                  @RequestParam(name = "isShow", required = false) String isShow) {

    log.debug(">>> 전체 계좌 조회 API 호출");
    log.debug(">>> 토큰: " + token);
    System.out.println(token);

    return apiService.getAccounts(token, isShow);
  }

  @GetMapping("/accounts/{id}")
  public AccountResponseDto getAccount(@PathVariable(name = "id") String id,
                          @RequestHeader(name = "Authorization") String token) {
    log.debug(">>> 계좌 상세 조회 API 호출");
    log.debug(">>> id: " + id);
      return apiService.getAccount(token, id);
  }
  
  @GetMapping("/recent")
  // RecentAccountListResponseDTO
  public AccountListResponseDto getRecent(
    @RequestParam(name = "accountType") int accountType,
    @RequestHeader(name = "Authorization") String token) {
        log.debug(">>> 최근 계좌 목록 조회 API 호출");
        log.debug(">>> accountType: " + accountType);

      return apiService.getRecents(token, accountType);
  }

  @GetMapping("/transaction/{accountID}")
  public TransactionListResponseDto getTransactions(
      @PathVariable(name = "accountID") String accountID,           
      @RequestHeader("Authorization") String token) {
    log.debug(">>> 거래내역 조회 API 호출");
    log.debug(">>> accountID: " + accountID);

      return apiService.getTransactions(token, accountID);
  }
  @GetMapping("/used")
  public UsedMoneyResponseDto getUsed(       
    @RequestHeader("Authorization") String token) {
    log.debug(">>> 거래내역 조회 API 호출");

      return apiService.getUsed(token);
  }
  @GetMapping("/topay")
  public ToPayResponseDto getTopay(@RequestHeader("Authorization") String token) {
    log.debug(">>> 내야 할 카드값 조회 API 호출");

      return apiService.getTopay(token);
  }
  @GetMapping("/card")
  public CardListResponseDto getCards(
          @RequestHeader("Authorization") String token,
          @RequestParam(name = "ym", required = false) String ym) {

    log.debug(">>> 카드 목록 조회 API 호출");
    
    return apiService.getCards(token, ym);
  }
  @PostMapping("/transfer")
  public TransactionResponseDto transferMoney(
    @RequestHeader("Authorization") String token,
    @RequestBody TransferRequestDto body) {
    log.debug(">>> 송금 요청 API 호출");
    log.debug(">>> body: " + body.getSenderId() + " " + body.getReceiverId());
    log.debug( String.format(">>> body: %s %s %s", 
                  body.getReceiverId(),
                  body.getSenderId(),
                  body.getAmount()) );
      
      return apiService.transfer(token, body);
  }
  
  @PutMapping("/accounts/{id}/favorite")
  public Boolean toggleFavorite(@PathVariable (name = "id") String id,
      @RequestHeader(name = "Authorization") String token) {

      log.debug(">>> 즐겨찾기 API 호출");

      return apiService.toggleFavorite(token, id);
  }

}