  $(document).ready(function(){
  $('.block').on('click', function(){
    var x= $('.block');
    var b= document.getElementById('tre');
    b.style.top='50px';
    for(var i=0;i<x.length;i++){
    x[i].style.display=('none');
      
    }
     this.style.display=('block');
      this.style.width=('700px');
      this.style.height=('600px');
      this.style.position=('fixed');
      this.style.bottom=('70px');
      
  })
  $('#tre').on('click', function(){
    var x=$('.block');
    var b=$('#tre');
    console.log(b[0].style.top = '-999px')
    for (var i=0;i<x.length;i++){
      x[i].style.display=('block');
      x[i].style.position=('relative');
      x[i].style.width=('40%');
      x[i].style.height=('174px');
      x[i].style.bottom=('0');
    }
    // b.css('top', '-999px');
  })
  $('.menu').on('click', function(){
    var f =$('.fruit');
    var m =$('.meat');
    for(var i=0;i<f.length;i++){
      f[i].style.display=('none');
      m[i].style.display=('block');
    }
     
  })
  $('#dark').on('click',function() {
      var head = $('.header');
      var foor = $('.footer');
      var dr =$('#dark');
      var wh =$('#white');
      var bl = $('.block');
      var bd = $('body');
      bl.css('background-color','black');
      bl.css('color','white');
      bd.css('background',('linear-gradient(45deg,black,white)'));
      dr.css('background','white');
      wh.css('background','black');
      head.css('background',('linear-gradient(45deg,black,white)'));
      foor.css('background',('linear-gradient(45deg,black,white)'));
  })
})

 