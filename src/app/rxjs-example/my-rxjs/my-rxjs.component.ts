import { Component, OnInit } from '@angular/core';
import { of, Subject, Observable, interval, fromEvent, BehaviorSubject } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, scan, reduce, pluck, mergeMap, switchMap } from 'rxjs/operators';
import { discoverLocalRefs } from '@angular/core/src/render3/context_discovery';

@Component({
  selector: 'app-my-rxjs',
  templateUrl: './my-rxjs.component.html',
  styleUrls: ['./my-rxjs.component.css']
})
export class MyRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // --------------- Subject ---------------------------------------
/*     let subject = new Subject(); // creates a new subject which can emit a data
    subject.subscribe({ // subscribing to a subject
      next: function(value){
        console.log(value)
      },
      error: function(error){
        console.log(error);
      },
      complete: function(){
        console.log('Completed');
      }
    })

    subject.subscribe((value)=> {  // subscribing to a subject
      console.log(value);
    },(error) =>{
      console.log(error);
    },()=>{
      console.log('Completed')
    })

    subject.next('A new data');    // emit a data
    // subject.error('Some error !!');  // emit an error
    subject.complete();  // send complete  */
    // --------------- Subject  End ---------------------------------------
    // --------------- Filter ---------------------------------------

/*     let observable = interval(1000);
    observable
    .pipe(filter((value)=>{
      return value%2 === 0;
    }))
    .subscribe((value)=> {
      console.log(value);
    }, (error)=> {
      console.log(error)
    },()=>{
      console.log('Completed')
    }) */

    // --------------- Filter End ---------------------------------------
    // ---------------map, debounceTime, distinctUntilChanged ---------------------------------------

/*     let input = document.querySelector('input');
    let observable = fromEvent(input, 'input');

    observable
    .pipe(
      map((event)=>{
        return event.target.value;
      }),
      debounceTime(1000),
      distinctUntilChanged())
    .subscribe((data)=>{
      console.log(data);
    }) */

    // --------------- end map, debounceTime, distinctUntilChanged ---------------------------------------

    // --------------- reduce, scan ---------------------------------------

/*     const observable = of(1,2,3,4,5);

    observable
    .pipe(
      reduce((sum, value)=>{
        return sum+value
      },0)
    )
    .subscribe(sum => console.log(sum))

    observable
    .pipe(
      scan((sum, value)=>{
        return sum+value
      },0)
    )
    .subscribe(sum => console.log(sum)) */

    // --------------- end reduce, scan ---------------------------------------

    // --------------- pluck() ---------------------------------------
/*       let input = document.querySelector('input');
      let observable = fromEvent(input,'input');

      observable
      .pipe(
      //   map((event)=>{
      //   return event.target.value
      // }
      pluck('target','value'),debounceTime(1000), distinctUntilChanged())
      .subscribe((data)=>{
        console.log(data);
      }) */
    // --------------- end  pluck() ---------------------------------------
    // ---------------mergeMap() ---------------------------------------

/*     let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    let span = document.querySelector('span');

    let observable1 = fromEvent(input1,'input');
    let observable2 = fromEvent(input2,'input');

    observable1.pipe(
      mergeMap((event1)=>{
        return observable2.pipe(
          map((event2)=>{
            return event1.target.value + ' ' + event2.target.value;

          })
        )
      })
    ).subscribe((combinedValue)=> {
      span.textContent = combinedValue;
    }) */
    // ---------------end mergeMap() ---------------------------------------
    // --------------- switchMap() ---------------------------------------
/* let button = document.querySelector('button');
let observable1 = fromEvent(button,'click');
let observable2 = interval(1000);

// observable1.subscribe((event1)=>{
//   observable2.subscribe((value)=> {
//     console.log(value);
//   })
// })

observable1.pipe(
  switchMap((event)=>{
    return observable2
  })
).subscribe((value)=>{
  console.log(value);
}) */

    // --------------- end switchMap() ---------------------------------------
    // --------------- behaviourSubject() ---------------------------------------
/* 
  let clickEmitted = new BehaviorSubject('Not clicked');
  let button = document.querySelector('button');
  let span = document.querySelector('span');

  button.addEventListener('click', () => {
    clickEmitted.next('Clicked')
  })

  clickEmitted.subscribe((value)=>{
    span.textContent = value;
  })
  clickEmitted.next('Not emitted') */


  }


}
