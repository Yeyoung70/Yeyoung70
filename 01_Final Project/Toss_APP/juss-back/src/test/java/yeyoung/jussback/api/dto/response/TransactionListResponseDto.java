package yeyoung.jussback.api.dto.response;

import java.util.ArrayList;

import lombok.Data;

@Data
public class TransactionListResponseDto {
    private ArrayList<TransactionResponseDto> transactions;
}

// ArrayList<String>

// in python
// List[str]
// ['hello', 'python', 'aaa']
// List[int]
// [ 1, 2, 3, 4, 5 ]