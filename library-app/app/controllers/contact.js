import Controller from '@ember/controller';
import { gte } from '@ember/object/computed';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    contactHeader: 'Contact Us',
    responseMessage: '',
    isValidEmail: match('email', /^.+@.+\..+$/),
    isDisabled: not('isValid'),
    isMessageEnoughLong: gte('message.length', 5),

    actions:{

        sendMessage(){
            if(this.isValidEmail && this.isMessageEnoughLong){
            alert(`Sending in progress: ${this.get('email')}`);
            this.set('responseMessage', 'Message sent!');
            setTimeout(function () {
                window.location.reload()
            }, 3000);
            }else if(!this.isValidEmail){
                alert('Email is not valid!');
                this.set('email', '')
            }else if(!this.isMessageEnoughLong){
                alert('Message is not long enough!');
            }


            
        }
    }

});
