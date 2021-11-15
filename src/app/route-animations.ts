import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations';

export const fader = 
    trigger ('routeAnimations' , [
        transition('* => normal', normal()),
        transition('* => longer', longer()),
    ]);

function longer(){
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(10%)'
            }),
        ]),
        query(':enter', [
            animate('15000ms ease', 
                style({ opacity: 1, transform: 'scale(1)'})),
        ])
    ]
}

function normal(){
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(10%)'
            }),
        ]),
        query(':enter', [
            animate('3000ms ease', 
                style({ opacity: 1, transform: 'scale(1)'})),
        ])
    ]
}


// export const slider =
//     trigger('routeAnimations', [
//         transition('* => isLeft', slideTo('left')),
//         transition('* => isRight', slideTo('right')),
//         transition('isRight => *', slideTo('left')),
//         transition('isLeft => *', slideTo('right')),
//     ]);

// function slideTo(direction){
//     const optional = { optional: true };
//     return [
//         query(':enter, :leave', [
//             style({
//                 position: 'absolute',
//                 top: 0,
//                 [direction]: 0,
//                 width: '100%'
//             })
//         ], optional),
//         query(':enter', [
//             style({ [direction]: '-100%' })
//         ]),
//         group([
//             query(':leave', [
//                 animate('5000ms ease'), style({ [direction]: '100%' })
//             ], optional),
//             query(':enter', [
//                 animate('5000ms ease'), style({ [direction]: '0%' })
//             ], optional),
//         ]),

//     ];  
// }