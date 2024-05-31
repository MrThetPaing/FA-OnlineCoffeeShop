
const increment_fa=document.querySelector('.incre-fa');
const decrement_fa=document.querySelector('.decre-fa');
const btn_fa=document.querySelector('.value-fa');


const increment_love=document.querySelector('.incre-love');
const decrement_love=document.querySelector('.decre-love');
const btn_love=document.querySelector('.value-love');


const increment_missing=document.querySelector('.incre-missing');
const decrement_missing=document.querySelector('.decre-missing');
const btn_missing=document.querySelector('.value-missing');

const increment_ex=document.querySelector('.incre-ex');
const decrement_ex=document.querySelector('.decre-ex');
const btn_ex=document.querySelector('.value-ex');

const total=document.querySelector('.total-cost-value');

let value_fa=0;
let value_love=0;
let value_missing=0;
let value_ex=0;

/*const price_fa=1500;
const price_love=1500;
const price_missing=2000;
const price_ex=2500; */

 let total_value=0;
 
 const container_footer=document.querySelector('.footerclass');
 const h2_tag=document.createElement('h2');
 const strong_tag=document.createElement('Strong');
 strong_tag.textContent='Thank you so much for buying';
 //h2_tag.appendChild(strong_tag);
//container_footer.appendChild(h2_tag);

const buy_button=document.querySelector('.buyclass');


increment_fa.addEventListener('click',function(){
    value_fa=btn_fa.textContent;
    btn_fa.textContent=parseInt(value_fa)+1;

    total_value=(parseInt(btn_fa.textContent)*1500)+ (parseInt(btn_love.textContent)*1500)+(parseInt(btn_missing.textContent)*2000)+(parseInt(btn_ex.textContent)*2500);

  total.textContent=parseInt(total_value); 
}

)

decrement_fa.addEventListener('click',function(){
     value_fa=btn_fa.textContent;
     if(parseInt(value_fa)>0){
        btn_fa.textContent=parseInt(value_fa)-1;
        total_value=(parseInt(btn_fa.textContent)*1500)+ (parseInt(btn_love.textContent)*1500)+(parseInt(btn_missing.textContent)*2000)+(parseInt(btn_ex.textContent)*2500);

        total.textContent=parseInt(total_value); 
     }
    
}
) 

increment_love.addEventListener('click',function(){
    value_love=btn_love.textContent;
    btn_love.textContent=parseInt(value_love)+1;
    total_value=(parseInt(btn_fa.textContent)*1500)+ (parseInt(btn_love.textContent)*1500)+(parseInt(btn_missing.textContent)*2000)+(parseInt(btn_ex.textContent)*2500);

        total.textContent=parseInt(total_value); 
}

)

decrement_love.addEventListener('click',function(){
     value_love=btn_love.textContent;
     if(parseInt(value_love)>0){
        btn_love.textContent=parseInt(value_love)-1;
        total_value=(parseInt(btn_fa.textContent)*1500)+ (parseInt(btn_love.textContent)*1500)+(parseInt(btn_missing.textContent)*2000)+(parseInt(btn_ex.textContent)*2500);
        total.textContent=parseInt(total_value);
     }
    
}

) 


increment_missing.addEventListener('click',function(){
    value_missing=btn_missing.textContent;
    btn_missing.textContent=parseInt(value_missing)+1;
    total_value=(parseInt(btn_fa.textContent)*1500)+ (parseInt(btn_love.textContent)*1500)+(parseInt(btn_missing.textContent)*2000)+(parseInt(btn_ex.textContent)*2500);
        total.textContent=parseInt(total_value); 
}

)

decrement_missing.addEventListener('click',function(){
     value_missing=btn_missing.textContent;
     if(parseInt(value_missing)>0){
        btn_missing.textContent=parseInt(value_missing)-1;
        total_value=(parseInt(btn_fa.textContent)*1500)+ (parseInt(btn_love.textContent)*1500)+(parseInt(btn_missing.textContent)*2000)+(parseInt(btn_ex.textContent)*2500);
        total.textContent=parseInt(total_value); 
     }
    
}
)

increment_ex.addEventListener('click',function(){
    value_ex=btn_ex.textContent;
    btn_ex.textContent=parseInt(value_ex)+1;
    total_value=(parseInt(btn_fa.textContent)*1500)+ (parseInt(btn_love.textContent)*1500)+(parseInt(btn_missing.textContent)*2000)+(parseInt(btn_ex.textContent)*2500);

        total.textContent=parseInt(total_value); 
}

)

decrement_ex.addEventListener('click',function(){
     value_ex=btn_ex.textContent;
     if(parseInt(value_ex)>0){
        btn_ex.textContent=parseInt(value_ex)-1;
        total_value=(parseInt(btn_fa.textContent)*1500)+ (parseInt(btn_love.textContent)*1500)+(parseInt(btn_missing.textContent)*2000)+(parseInt(btn_ex.textContent)*2500);

        total.textContent=parseInt(total_value); 
     }
    
}
) 

buy_button.addEventListener('click',function(){
   h2_tag.appendChild(strong_tag);
   container_footer.appendChild(h2_tag);
   total_value=0;
   total.textContent=0;

})





