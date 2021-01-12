AFRAME.registerComponent('move-box1',{
    schema:{
        moveX:{type:'number', default:1}
    },
    tick:function(){
        this.data.moveX=this.data.moveX+0.01;
        var pos=el.getAttribute("position");
        pos.x=this.data.moveX;
        this.el.seAttribute("position",{x=pos.x,y=pos.y,z=pos.z});
    }
});