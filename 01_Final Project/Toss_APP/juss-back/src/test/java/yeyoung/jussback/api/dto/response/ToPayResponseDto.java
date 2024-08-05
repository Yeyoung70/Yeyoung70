package yeyoung.jussback.api.dto.response;

import lombok.Data;

@Data
public class ToPayResponseDto {
    private ToPay topay;
}

@Data
class ToPay{
    private String data;
    private int amount;
}