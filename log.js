AFRAME.registerComponent('log',{
    schema:{
        message:{type:'string', default:'Hello!'}
    },
    init:function(){
        console.log(this.data.message);
    }
});