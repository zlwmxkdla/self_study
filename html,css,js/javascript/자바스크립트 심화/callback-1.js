//callback 함수
const order = (coffee,display) =>{
    console.log(coffee+"주문 접수!");
    setTimeout(()=>{
        display(coffee);
        },3000
    )
}
display = (result)=>{
    console.log(result+"준비 완료!");
}
order("아메리카노",display);