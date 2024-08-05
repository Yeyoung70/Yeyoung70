package yeyoung.jussback.api.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

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

@Service
@Slf4j
public class ApiService {

    @Value("${server.url}")
    private String serverUrl;

    private final MultiValueMap<String, String> emptyBody = new LinkedMultiValueMap<>();

    private <T, E> T requestApi(Class<T> responseType, String token, String endpoint, HttpMethod method, E body) {
        RestTemplate RestTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        if ( token !=null ) {
            headers.set("Authorization", token);
        }

        HttpEntity < E > httpEntity = new HttpEntity<>(body, headers);
        ResponseEntity<T> response = RestTemplate.exchange(
            serverUrl + endpoint, method, httpEntity, responseType);

        return response.getBody();
    }

    public TokenResponseDto startJuss() {
        log.debug(">>> start service 호출");

        // // 1. 유저 생성 api 호출
        // MultiValueMap<String, String> datas = new LinkedMultiValueMap<>();
        TokenResponseDto token = requestApi(TokenResponseDto.class, null,"/user/", HttpMethod.POST, emptyBody);
        // RestTemplate RestTemplate = new RestTemplate();

        // // data 생성
        // MultiValueMap<String, String> datas = new LinkedMultiValueMap<>();

        // // headers 생성
        // HttpHeaders headers = new HttpHeaders();
        // headers.setContentType(MediaType.APPLICATION_JSON);

        // // HttpEntity 생성
        // HttpEntity < MultiValueMap<String, String> > httpEntity = new HttpEntity<>(datas, headers);

        // // ResponseEntity 생성
        // ResponseEntity<TokenResponseDto> response = RestTemplate.exchange(
        //     serverUrl + "/user/", HttpMethod.POST, httpEntity, TokenResponseDto.class);

        // TokenResponseDto body = response.getBody();
        // body.getAccessToken();
        // body.getTokenType();
        //Bearer

        // 2. Fake 데이터 생성 api 호출 
        HashMap data = requestApi(HashMap.class, "Bearer " + token.getAccessToken(), "/data/", HttpMethod.POST, emptyBody);
        
        // // requests 객체 생성
        // RestTemplate restTemplate2 = new RestTemplate();

        // // data 생성
        // MultiValueMap<String, String> datas2 = new LinkedMultiValueMap<>();

        // // header 생성
        // HttpHeaders headers2 = new HttpHeaders();
        // headers2.setContentType(MediaType.APPLICATION_JSON);
        // headers2.add("Authorization",
        //             "Bearer " + token.getAccessToken() );

        // // HttpEntity 생성
        // HttpEntity<MultiValueMap<String, String>> httpEntity2 = new HttpEntity<>(datas2, headers2);

        // //Response
        // ResponseEntity<HashMap> response2 = restTemplate2.exchange(
        //     serverUrl + "/data/", HttpMethod.POST, httpEntity2, HashMap.class
        // );
        log.debug( ">>> 데이터 생성 MSG" + data.get("msg") );

        // HashMap<String, String> data = new HashMap<>();
        // data.put("msg", "start !");

        return token;
    }

public AccountListResponseDto getAccounts(String token, String isShow) {
    AccountListResponseDto accountListResponseDto = requestApi(AccountListResponseDto.class, token,
                    "/account/" + (isShow != null ? "?is_show=" + isShow : "" ), HttpMethod.GET, emptyBody);

    return accountListResponseDto;
  }

  public AccountResponseDto getAccount(String token, String id) {
    AccountResponseDto accountResponseDto = requestApi(AccountResponseDto.class,
                    token, "/account/" + id, HttpMethod.GET, emptyBody);
    return accountResponseDto;
  }

  public AccountListResponseDto getRecents(String token, int accountType) {
    AccountListResponseDto accountListResponseDto = requestApi(AccountListResponseDto.class,
                    token, "/account/recent?account_type=" + accountType, HttpMethod.GET, emptyBody);

    return accountListResponseDto;
  }

  public TransactionListResponseDto getTransactions(
    String token, String accountID){
        TransactionListResponseDto transactionListResponseDto = requestApi(TransactionListResponseDto.class,
                    token, "/transaction/" + accountID, HttpMethod.GET, emptyBody);
    return transactionListResponseDto;
  }

    public UsedMoneyResponseDto getUsed(String token){
        UsedMoneyResponseDto usedMoneyResponseDto = requestApi(UsedMoneyResponseDto.class,
                    token, "/transaction/used", HttpMethod.GET, emptyBody);
    return usedMoneyResponseDto;
  }

    public ToPayResponseDto getTopay(String token) {
        ToPayResponseDto toPayResponseDto = requestApi(ToPayResponseDto.class,
                    token, "/transaction/topay", HttpMethod.GET, emptyBody);

    return toPayResponseDto;
  }

    public CardListResponseDto getCards(String token, String ym) {
        CardListResponseDto cardListResponseDto = requestApi(CardListResponseDto.class,
                    token, "/card" + (ym != null ? "?ym="+ym : "/"), HttpMethod.GET, emptyBody);
    return cardListResponseDto;
  }

    public TransactionResponseDto transfer(String token, TransferRequestDto body) {
        TransactionResponseDto transactionResponseDto = requestApi(TransactionResponseDto.class,
                    token,"/transfer", HttpMethod.POST, body);
    return transactionResponseDto;
  }

    public Boolean toggleFavorite(String token, String id) {
        Boolean res = requestApi(Boolean.class, token, "/account/favorite/"+id, HttpMethod.PUT, emptyBody);
    return res;
  }
}
