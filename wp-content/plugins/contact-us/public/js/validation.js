// class Validation {
//
//     static setMessageWrapBlockSelector = messageWrapBlockSelector => {
//         this.messageWrapBlockSelector = messageWrapBlockSelector
//     }
//
//     static check = elem => {
//         const type = elem.getAttribute('data-type') ? elem.getAttribute('data-type') : elem.type
//
//         if (type && this[type]) {
//             return this[type](elem)
//         }
//         if (!this[type]) {
//             console.warn('No method for this type field')
//         } else {
//             console.warn('Check')
//         }
//     }
//
//
//     static name = elem => {
//         if (elem.value === '') {
//             this.tipMessage(elem, tips.requiredName, true)
//             return true
//         }
//         if (elem.value.length < 2) {
//             this.tipMessage(elem, tips.lengthMinName, true)
//             return true
//         }
//         if (/(\s\s+)|(^\s)|(\s$)|([0-9])|(\-{2})|(,{2})|(\.{2})|('{2})/.test(elem.value)) {
//             this.tipMessage(elem, tips.validName, true)
//             return true
//         }
//         if (/["!#$%&()*+/:;<=>?@[\\\]^_`{|}~]/.test(elem.value)) {
//             this.tipMessage(elem, tips.validSpecialCharacters, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//
//     static text = elem => {
//         if (elem.value === '') {
//             this.tipMessage(elem, tips.requiredText, true)
//             return true
//         }
//         if (elem.value.length < 2) {
//             this.tipMessage(elem, tips.lengthMinName, true)
//             return true
//         }
//         if (elem.value.length > 80) {
//             this.tipMessage(elem, tips.lengthMaxName, true)
//             return true
//         }
//         if (!/^[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~\s]+$/.test(elem.value)) {
//             this.tipMessage(elem, tips.onlyLatNumbSumbol, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//     static fullName = elem => {
//         if (elem.value === '') {
//             this.tipMessage(elem, tips.requiredText, true)
//             return true
//         }
//         if (elem.value.length < 2) {
//             this.tipMessage(elem, tips.lengthMinName, true)
//             return true
//         }
//         if (elem.value.length > 80) {
//             this.tipMessage(elem, tips.lengthMaxName, true)
//             return true
//         }
//         if (!/^[A-Za-z\s]+$/.test(elem.value)) {
//             this.tipMessage(elem, tips.onlyLatSumbol, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//
//     static email = elem => {
//         if (elem.value === '') {
//             this.tipMessage(elem, tips.requiredMail, true)
//             return true
//         }
//         if (!/@/.test(elem.value)) {
//             this.tipMessage(elem, tips.mailFrendly, true)
//             return true
//         }
//         if (
//             !/^(([^А-Яа-я<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//                 elem.value
//             )
//         ) {
//             this.tipMessage(elem, tips.validEmail, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//
//     static tel = elem => {
//         if (elem.value === '') {
//             this.tipMessage(elem, tips.requiredPhone, true)
//             return true
//         }
//         if (!/^\d+$/.test(elem.value)) {
//             this.tipMessage(elem, tips.onlyNumbers, true)
//             return true
//         }
//         if (elem.value.length <= 5 || elem.value.length > 21) {
//             this.tipMessage(elem, tips.validPhone, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//
//     static message = elem => {
//         if (elem.value === '') {
//             this.tipMessage(elem, tips.required, true)
//             return true
//         }
//         if (elem.value.length < 10) {
//             this.tipMessage(elem, tips.lengthMinMessage, true)
//             return true
//         }
//         if (elem.value.length > 80) {
//             this.tipMessage(elem, tips.lengthMaxName, true)
//             return true
//         }
//         if (!/[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/.test(elem.value)) {
//             this.tipMessage(elem, tips.onlyLatNumbSumbol, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//     static selectOption = elem => {
//         if (elem.value === '') {
//             this.tipMessage(elem, tips.required, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//     static textarea = this.message
//
//
//     static file = elem => {
//         const extension = elem.value ? elem.value.slice(elem.value.lastIndexOf('.')) : null
//
//         if (elem.value === '') {
//             this.tipMessage(elem, tips.requiredFile, true)
//             return true
//         }
//         if (extension !== '.rtf' && extension !== '.doc' && extension !== '.pdf' && extension !== '.docx') {
//             this.tipMessage(elem, tips.formatFile, true)
//             return true
//         }
//         if (elem.files[0].size / 1024 / 1024 > 2) {
//             this.tipMessage(elem, tips.sizeFile, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//
//     static password = elem => {
//         if (elem.value === '') {
//             this.tipMessage(elem, tips.required, true)
//             return true
//         }
//         if (!/[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/.test(elem.value)) {
//             this.tipMessage(elem, tips.onlyLatNumbSumbol, true)
//             return true
//         }
//         if (elem.value.length < 5) {
//             this.tipMessage(elem, tips.lengthMinPassword, true)
//             return true
//         }
//         if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/gm.test(elem.value)) {
//             this.tipMessage(elem, tips.rightPassword, true)
//             return true
//         }
//         if (elem.value.length > 64) {
//             this.tipMessage(elem, tips.lengthMaxPassword, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//
//     static passwordConfirm = elem => {
//         const form = elem.closest('form')
//         const pass = form.querySelector('input[data-type="password"]') || form.querySelector('input[type="password"]')
//
//         if (elem.value === '') {
//             this.tipMessage(elem, tips.required, true)
//             return true
//         }
//         if (elem.value.length < 5) {
//             this.tipMessage(elem, tips.lengthMinPassword, true)
//             return true
//         }
//         if (elem.value !== pass.value) {
//             this.tipMessage(elem, tips.conform, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//
//     static customCheckbox = elem => {
//         if (!elem.checked) {
//             this.tipMessage(elem, tips.checkbox, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//     static customCheckboxCheck = elem => {
//         console.log(elem.dataset.name);
//         // console.log(elem1.checked);
//         if (!elem.checked) {
//             this.tipMessage(elem, tips.checkbox, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//
//     static authentication = elem => {
//         if (elem.value === '') {
//             this.tipMessage(elem, tips.empty, true)
//             return true
//         }
//
//         this.tipMessage(elem, tips.success, false)
//         return false
//     }
//
//
//     static customRadio = wrapp => {
//         const radioInputs = [...wrapp.querySelectorAll('input[type="radio"]')]
//         const notCheked = radioInputs.every(elem => elem.checked === false)
//         if (notCheked) {
//             this.tipMessage(wrapp, tips.checkbox, true)
//             return true
//         }
//         this.tipMessage(wrapp, tips.success, false)
//         return false
//     }
//
//
//     static customCheckList = wrapp => {
//
//         const radioInputs = document.querySelectorAll('input[type="checkbox"]')
//         const set = new Set(radioInputs);
//         const arr = Array.from(set);
//         const notCheked = arr.some(elem => elem.checked === true)
//         console.log(notCheked)
//         if (notCheked) {
//             this.tipMessage(wrapp, tips.success, false)
//             return false
//         }
//         this.tipMessage(wrapp, tips.checkbox, true)
//         return true
//     }
//
//
//     static tipMessage = (elem, tip, status) => {
//         const messageWrapBlock = elem.closest(this.messageWrapBlockSelector) || elem.parentElement
//
//         if (!status) {
//             messageWrapBlock.classList.remove('error')
//             messageWrapBlock.classList.add('success')
//             messageWrapBlock.setAttribute('data-error', tip)
//         } else {
//             messageWrapBlock.classList.add('error')
//             messageWrapBlock.classList.remove('success')
//             messageWrapBlock.setAttribute('data-error', tip)
//         }
//     }
// }





class CustomFormValid {
    constructor() {

    }

    init = () => {
        console.log('ss')
        const forms = document.querySelectorAll('._valid-form');
        console.log(forms);
        forms.forEach(form => {
            form.querySelectorAll('._valid-input').forEach(elem => {
                console.log(elem)
                if (elem.getAttribute('type') === 'file') {
                    elem.addEventListener('input', ()=> this.check(elem));
                    return;
                }

                elem.addEventListener('blur', ()=> this.check(elem));
            });
        })
    };



    check = (elem) => {
        const type = elem.getAttribute('data-type') ? elem.getAttribute('data-type') : elem.type;
        console.log(type)

        if (type && this[type]) {
            return this[type](elem);
        }
    };

    text = (elem) => {
        if (elem.value === "") {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        } else if (elem.value.length < 2) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        }

        this.tipMessage(elem, 'aaaaa', false);
        return false;
    };

    name = (elem) => {
        if (elem.value === "") {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        } else if (elem.value.length < 3) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        } else if (!(/^[A-Za-zА-Яа\s\'\-]{2,40}$/.test(elem.value))) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        }

        this.tipMessage(elem, 'aaaaa', false);
        return false;
    };

    email = (elem) => {
        if (elem.value === "") {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        } else if (!(/^(([^А-Яа-я<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(elem.value))) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        }

        this.tipMessage(elem, 'aaaaa', false);
        return false;
    };

    tel = (elem) => {
        if (elem.value === "") {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        } else if (!(/^[\d\s+()]{1,}$/.test(elem.value))) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        } else if (elem.value.length <= 5 || elem.value.length > 21) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        }

        this.tipMessage(elem, 'aaaaa', false);
        return false;
    };

    password = (elem) => {
        if (elem.value === "") {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        } else if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,15}$/.test(elem.value))) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        }

        this.tipMessage(elem, 'aaaaa', false);
        return false;
    };

    passwordConfirm = (elem) => {
        const passwordElem = elem.closest('form').querySelector('input[name="password"]');

        if (elem.value === "") {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        } else if (elem.value !== passwordElem.value) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        }

        this.tipMessage(elem, 'aaaaa', false);
        return false;
    };

    messageText = (elem) => {
        if (elem.value === "") {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        } else if (elem.value.length < 10) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        }

        this.tipMessage(elem, 'aaaaa', false);
        return false;
    };

    file = elem => {
        if (elem.value === "") {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        } else if (!(/(\.doc|\.docx|\.pdf)$/i.exec(elem.value))) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        }

        this.tipMessage(elem, 'aaaaa', false);
        return false;
    }

    customCheckbox = (elem) => {
        if (!elem.checked) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        }

        this.tipMessage(elem, 'aaaaa', false);
        return false;
    };

    choose = elem => {
        const elemList = elem.closest('.form-group').querySelectorAll('._valid-input');
        const isChecked = [...elemList].some(elem => elem.checked);

        if (!isChecked) {
            this.tipMessage(elem, 'aaaaa', true);
            return true;
        }

        this.tipMessage(elem, 'aaaaa', false);
        return false;
    }

    tipMessage = (elem, tip, status) => {
        const parent = elem.closest('.form-group');

        if (!status) {
            parent.classList.remove('error');
            parent.classList.add('success');
            parent.setAttribute('data-error', tip);
        } else {
            parent.classList.add('error');
            parent.classList.remove('success');
            parent.setAttribute('data-error', tip);
        }
    };

    validate = (form) => {
        let answer = Array.from(form.querySelectorAll('._valid-input')).filter(item => this.check(item));

        return answer.length === 0;
    }
}










