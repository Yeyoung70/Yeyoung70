import React, {useState, useEffect} from 'react'

import { won } from '../../utils/currency';
import BaseButton from '../../components/Button/BaseButton';

import { GoTriangleLeft, GoTriangleRight  } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

import './MyExpense.css'
import Card from '../../components/Card/Card';
import Badge from '../../components/Badge/Badge';

// import axios from 'axios';
import { getCards } from '../../api/card';

const MyExpense = () => {

    const [cards, setCards] = useState([
        // {
        //   id: 1,
        //   card_name: "하나 머니세상 체크카드",
        //   amount: 612277,
        //   min_usage: 250000,
        //   is_credit: true,
        // },
        // {
        //   id: 2,
        //   card_name: "한국씨티 클리어 포인트 카드",
        //   amount: 0,
        //   min_usage: 250000,
        //   is_credit: false,
        // },
        // {
        //   id: 3,
        //   card_name: "기업 디지털 포인트 카드",
        //   amount: 851450,
        //   min_usage: 0,
        //   is_credit: false,
        // },
        // {
        //   id: 4,
        //   card_name: "신협 HI-POINT",
        //   amount: 1000,
        //   min_usage: null,
        //   is_credit: true,
        // },
      ]);
      
      // from datetime import datetime
      // datetime.now()
      const [nowDate, setNowDate] = useState(new Date());

    //   [], {}, 0, false
      // api호출을 통해서 서버에서 데이터를 받아오는데,
      // 데이터를 받아오고 화면을 그리는 것이 아니라
      // 화면을 그려놓고, 데이터가 오면 그 때 변경된 데이터로
      // 화면을 다시 수정하는 것
    
      useEffect(() => {

        // 서버에서 데이터 받아오기
        // 기다리지 않고 다른일을 처리하다가, 
        // 데이터가 도착했을 때, 
        // I/O - 어디갔다오는 작업 (요청 후 받기까지 내가 어떤 작업을 해야되는지?) 
        // 왔을 때 귀만 기울이고 있는 것 -> eventloop에서 체크만 하는 것
        // 왔으면, 그 때 계산
        // non-blocking / async / 비동기방식
        // blocking / sync / 동기화방식
    
        // 서버에서 cards를 가져와서, setCards()
        // const token = localStorage.getItem('jwt-token');

        let ym = nowDate.toISOString().replace('-', '').slice(0, 6);
        // ISO 국제표준으로 사용되는 
        // yyyy-mm-ddTHH:MM:SS.SSSZ 
        
        getCards(ym).then(data => setCards(data))
        // axios({
        //   url: 'http://127.0.0.1:8082/api/v1/card?ym='+ym,
        //   method: 'get',
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   }
        // }).then(res => setCards(res.data.cards))

      }, [nowDate]) // 처음 렌더링 시 실행
      
      const [totalAmount, setTotalAmount] = useState(0)
      const [creditAmount, setCreditAmount] = useState(0)
      const [checkAmount, setCheckAmount] = useState(0)
    
      useEffect(() => {
        // 변수의 값이 바뀌면 실행
    
        // 전체 사용금액
        // setTotalAmount(계산한 금액)
        // 신용카드 사용금액
    
        // 체크카드 사용금액
      // let creditCards = cards.filter(({ is_credit }) => is_credit);
      // console.log(creditCards);

      // let ta = 0;
      // let ca = 0;
      // let cha = 0;
      // cards.forEach( ({id, card_name, amount, is_credit }) => {
      //   ta += amount;
      //   if (is_credit) {
      //       ca+=amount;
      //   } else {
      //       cha +=amount;
      //   }
      // } )
    //   setTotalAmount(ta);
    //   setCreditAmount(ca);
      // setCheckAmount(cha);

      setTotalAmount(cards.reduce( (acc,{ amount }) => {
        return acc + amount}, 0 ))

      setCreditAmount(cards.reduce( (acc,{ amount, is_credit }) => {
        return is_credit ? acc + amount : acc }, 0 ))

      setCheckAmount(cards.reduce( (acc,{ amount, is_credit }) => {
        return !is_credit ? acc + amount : acc }, 0 ))
      }, [cards]);

  return (
    <div className='MyExpense'>
      <div className="expense">
        <div className="left">
            <div className="month">
                <GoTriangleLeft size={20} onClick={() => {
                let temp = new Date( nowDate.setMonth( nowDate.getMonth() - 1) );
                // console.log(temp);
                setNowDate(temp)
                }}/>
                {nowDate.getMonth()+1}월 소비 
                <GoTriangleRight size={20} color='909090' onClick={() => {
                let temp = new Date( nowDate.setMonth( nowDate.getMonth() + 1) );
                setNowDate(temp)
                }}/>
            </div>
            <div className='total'>{won(totalAmount)}
            <IoIosArrowDown size={18} color='909090' />
            </div>
            </div>
        <div className="right">
            <BaseButton text={'분석'}/>
        </div>
        
      </div>
      <div>
       <div className="card-box">
        <div>
        <div>신용카드</div>
        <span>{won(creditAmount)}</span>
        </div>

        {cards.filter(({is_credit}) => is_credit)
            .map(({ id, card_name, amount, min_usage}) => {
                console.log()
                return(
                    <Card key={id}
                    title={card_name}
                    subTitle={
                    <div style={{display: "flex"}}>
                        {won(amount)} {
                            min_usage ?
                        <Badge
                        text={amount >= min_usage ? '실적 충족':'실적 부족'}
                        isActive={amount >= min_usage} /> : '' 
                         }
                        </div>}
                    />
                )
            })}
        <div className="card-box">
        <div>
        <div>체크카드</div>
        <span>{won(checkAmount)}</span>
        </div>

        {cards.filter(({is_credit}) => !is_credit)
            .map(({ id, card_name, amount, min_usage}) => {
                console.log()
                return(
                    <Card key={id}
                    title={card_name}
                    subTitle={
                    <div style={{display: "flex"}}>
                        {won(amount)} {
                            min_usage ?
                        <Badge
                        text={amount >= min_usage ? '실적 충족':'실적 부족'}
                        isActive={amount >= min_usage} /> : '' 
                         }
                        </div>}
                    />
                )
            })}
      </div>
      </div>
      </div>
    </div>
  )
}

export default MyExpense