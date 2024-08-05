package yeyoung.jussback.api.dto.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import lombok.Data;

@Data
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class TransferRequestDto {
    
    private int senderId;
    private int receiverId;

    private Long amount;
    private String memo;
}
