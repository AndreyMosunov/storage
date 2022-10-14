function calculate() {
         let element_input = document.querySelector (".first");
         let first = +element_input.value
         
         let element_input2 = document.querySelector (".second");
         let second = +element_input2.value

         let element_input3 = document.querySelector (".operator");
         let operator = element_input3.value

         if (first, second, operator==="+") {
         let element_result = document.querySelector (".result");
         element_result.innerHTML = +first+second
        
         let element_window = document.querySelector (".mask");
         element_window.classList.remove ("hidden")
         }

         if (first, second, operator==="-") {
         let element_result = document.querySelector (".result");
         element_result.innerHTML = first-second
        
         let element_window = document.querySelector (".mask");
         element_window.classList.remove ("hidden")
         }

         if (first, second, operator==="*") {
         let element_result = document.querySelector (".result");
         element_result.innerHTML = first*second
        
         let element_window = document.querySelector (".mask");
         element_window.classList.remove ("hidden")                 
         }

         if (first, second, operator==="/") {
         let element_result = document.querySelector (".result");
         element_result.innerHTML = first/second
        
         let element_window=document.querySelector (".mask");
         element_window.classList.remove ("hidden")                 
         }

         }

         function hide() {
         let element_window=document.querySelector (".mask");
         element_window.classList.add ("hidden")
         }