AFRAME.registerComponent('name',{
    schema:{
        message:{type:'string', default:'Hello!'}
    },
    init:function(){
        console.log(this.data.message);
    }
});