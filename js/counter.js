// const counters = document.querySelectorAll('.value_counter');
// const speed = 600;
//
// counters.forEach( counter => {
//    const animate = () => {
//       const value = +counter.getAttribute('akhi');
//       const data = +counter.innerText;
//       const time = value / speed;
//
//       var element = document.getElementById('counter_row');
//       var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
//       var scrollTop = document.documentElement.scrollTop;
//       diff =  distanceToTop-scrollTop
//      if(data < value) {
//           counter.innerText = Math.ceil(data + time);
//           setTimeout(animate, 1);
//         }else{
//           counter.innerText = value;
//         }
//       console.log(diff)
//    }
//
//    animate();
// });

$(window).one('scroll',function() {

      // const counters = document.querySelectorAll('.value_counter');
      // const speed = 10000;
      //
      // counters.forEach( counter => {
      //    const animate = () => {
      //       const value = +counter.getAttribute('akhi');
      //       const data = +counter.innerText;
      //       const time = value / speed;
      //
      //      if(data < value) {
      //           counter.innerText = Math.ceil(data + time);
      //           setTimeout(animate, 1);
      //         }else{
      //           counter.innerText = value;
      //         }
      //    }
      //
      //    animate();
      // })

      function numberWithCommas(n) {
          var parts=n.toString().split(".");
          return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      var endingCounterVar = [11, 4000, 50000000, 100, 1];

      for (let i = 0; i <= 4; i++) {

      let counter = { var: 0 };
      let tal = document.getElementById("tal-"+i);

       TweenMax.to(counter, 5, {
            var: endingCounterVar[i],
            onUpdate: function () {
                let nwc = numberWithCommas(counter.var);
                tal.innerHTML = nwc;
            },
            ease:Circ.easeOut
        });
      }

});

// let counts=setInterval(updated);
// let upto=0;
// function updated(){
//     var count= document.getElementById("counter");
//     count.innerHTML=++upto;
//     if(upto===1000)
//     {
//         clearInterval(counts);
//     }
// }
