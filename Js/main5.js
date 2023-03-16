// Đối tượng `Validator`
function Validator(options){
    function getParent(element, selector){
        while(element.parentElement){
            if (element.parentElement.matches(selector)){  //hàm matches với class mình cần
                return  element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRule = {}

    function Validate(inputElement, rule){
        //var errorElement = getParent(inputElement,'.form-group')
        var errorEle = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMess;


        //Lấy qua các rules của selector

        var rules= selectorRule[rule.selector];

        // Lặp qua các rule và kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for(var i=0;i<rules.length;++i){
            switch (inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMess = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMess = rules[i](inputElement.value);
                }
            if(errorMess) break;
        }
        
        if (errorMess){
            errorEle.innerText= errorMess;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorEle.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMess
    }

    var formElement = document.querySelector(options.form);
    if (formElement){ 
        formElement.onsubmit = function(e){
            e.preventDefault();  //bỏ đi tác vụ mặc định của nút submit

            var isFormValid = true;
            
            // Lọc qua từng rule và validate
            options.rules.forEach(function (rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = Validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false;
                }
            });
            


            if (isFormValid){
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        switch(input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name  + '"]:checked').value
                            break;
                            case 'file':
                                values[input.name] = input.files;
                            break;
                            case 'checkbox':
                                if(!input.matches(':checked')){
                                values[input.name] = '';
                                return values;
                                }
                                if(!Array.isArray(values[input.name])){
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                            break;
                            default:
                                values[input.name] = input.value;
                            }
                        return values;
                    },{});
                    options.onSubmit(formValues)
                    }
                    // Trường hợp submit với hành vi mặc định
                    else{
                        formElement.submit();
                    }
            } 
        }
        
        
        //Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input,...)
        options.rules.forEach(function (rule){

            //Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRule[rule.selector])){
                selectorRule[rule.selector].push(rule.test);
            } else {
                selectorRule[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function(inputElement){
                //Xử lý trường hợp blur khỏi input
                inputElement.onblur = function(){
                    Validate(inputElement, rule)
                }
                //Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function(){
                    var errorEle = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                    errorEle.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            })
            
        });
    }
}


//ĐỊnh nghĩa rule
// Nguyên tắc rules:
// 1. Khi có lỗi => trả ra mess lỗi
// 2. Khi hợp lệ => Không trả ra cái gì (undefined)
Validator.isRequired = function(selector,message){    //nhận lại giá trị hàm return
    return{
        selector: selector,
        test: function(value){
            return value ? undefined :message || 'Vui lòng nhập thông tin!' //trim loại bỏ dấu cách
        }
    }
}
Validator.isEmail = function(selector,message){
    return{
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined:message || 'Vui lòng nhập đúng email'
        }
    }
}
Validator.minLength = function(selector,min,message){
    return{
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined:message || `Vui lòng nhập đủ ${min} ký tự`;
        }
    }
}
Validator.isConfirmed = function(selector,getConfirmValue,message){
    return{
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined: message || 'Giá trị nhập không đúng';
        }
    }
}