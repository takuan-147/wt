let start;
let time = 0;
let ticks = 0;

// pain.
const WINDOW_INFO = [
    /***************************************** 1 *****************************************/
    {
        time: 0,

        timings:  [
            500,  533,  400,  267,  267,  133,  267,  267,  533,  400,  267,  267,  133,  133,  133,  267,  
            533,  400,  267,  267,  133,  267,  267,  533,  400,  267,  267,  133,  133,  133,  133,  67,  67,
   ...loop([267,  133,  133,  267,  133,  267,  133,  133,  133,  267,  267,
            267,  133,  133,  267,  133,  267,  167,  133,  133,  133,  133,  267,
            267,  133,  133,  267,  133,  267,  133,  133,  133,  267,  267,
            267,  133,  133,  267,  133,  267,  133,  133,  133,  133,  133,  133,   67,   67], 4),
           8676,
   ...loop([267,  133,  133,  267,  133,  267,  133,  133,  133,  267,  267,
            267,  133,  133,  267,  133,  267,  167,  133,  133,  133,  133,  267,
            267,  133,  133,  267,  133,  267,  133,  133,  133,  267,  267,
            267,  133,  133,  267,  133,  267,  133,  133,  133,  133,  133,  133,   67,   67], 4),
           2135,
           8442,
            133,  8508,
            133,  8508,
            133,  8275, 133,
   ...loop([267,  133,  133,  267,  133,  267,  133,  133,  133,  267,  267,
            267,  133,  133,  267,  133,  267,  167,  133,  133,  133,  133,  267,
            267,  133,  133,  267,  133,  267,  133,  133,  133,  267,  267,
            267,  133,  133,  267,  133,  267,  133,  133,  133,  133,  133,  133,   67,   67], 4),
              5
        ],

        sequence: [
              0,    1,    2,    1,    0,    1,    0,    4,    0,    1,    2,    1,    0,    1,    4,    3, 
              1,    2,    1,    0,    1,    0,    4,    0,    1,    2,    1,    0,    1,    4,    3,    4,   3,
     ...loop([1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,
              1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,    4,
              1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,
              1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,    4,    3,    4], 4),
              0,
     ...loop([1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,
              1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,    4,
              1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,
              1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,    4,    3,    4], 4),
              0,
              2,
              0, 2,
              0, 2,
              0, 2, 0,
     ...loop([1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,
              1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,    4,
              1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,
              1,    3,    4,    1,    4,    0,    1,    4,    1,    0,    3,    4,    3,    4], 4),
              4
        ],

        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 2 *****************************************/
    {
        time: 0,

        timings:  [ 
            500,
   ...loop([133,  267,  133,  133,  400,  133,  267,  133,  533], 16),
           8776,
   ...loop([133,  267,  133,  133,  400,  133,  267,  133,  533], 16),
           2302,
   ...loop([133,  267,  133,  133,  400,  133,  267,  133,  533], 32),
              5
        ],
        sequence: [
              0,
     ...loop([4,    3,    0,    1,    2,    4,    3,    0,    1], 16),
              0,
     ...loop([4,    3,    0,    1,    2,    4,    3,    0,    1], 16),
              0,
     ...loop([4,    3,    0,    1,    2,    4,    3,    0,    1], 32),
              4
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 3 *****************************************/
    {
        time: 0,

        timings:  [ 
            500,
   ...loop([133,  133,  267,  267,  267,  133,  267,  267,  400,
            133,  133,  267,  267,  267,  133,  267,  267,  133,  267], 16),
            19586,
   ...loop([133,  133,  267,  267,  267,  133,  267,  267,  400,
            133,  133,  267,  267,  267,  133,  267,  267,  133,  267], 12),
              5
        ],
        sequence: [
              0,
     ...loop([1,    0,    1,    0,    3,    1,    0,    1,    4,
              1,    0,    1,    0,    3,    1,    0,    1,    4,    2], 16),
              0,
     ...loop([1,    0,    1,    0,    3,    1,    0,    1,    4,
              1,    0,    1,    0,    3,    1,    0,    1,    4,    2], 12),
              4
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 4 *****************************************/
    {
        time: 0,

        timings:  [ 
            500,
   ...loop([400,  400, 1333,  400,  400, 1367], 14),
            400,  400, 1333,  400,  400,
            10554,            
   ...loop([400,  400, 1333,  400,  400, 1367], 14),
              5
        ],
        sequence: [
              0,
     ...loop([1,    3,    1,    0,    2,    4], 14),
              1,    3,    1,    0,    2,
              0,
     ...loop([1,    3,    1,    0,    2,    4], 14),
              4
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 5 *****************************************/
    {
        time: 0,

        timings:  [ 
            500, 2000,
   ...loop([133, 1733,  267,  133, 2033,  133, 1200,  267,  267,  267,  133, 2000], 6),
            133, 1733,  267,  133, 2033,  133, 1200,  267,  267,  267,
          19320,
   ...loop([133, 1733,  267,  133, 2033,  133, 1200,  267,  267,  267,  133, 2000], 6),
              5
        ],
        sequence: [
              0,    2,
     ...loop([0,    4,    2,    1,    3,    0,    4,    2,    1,    3,    0,    4], 6),
              0,    4,    2,    1,    3,    0,    4,    2,    1,    3,
              0,
     ...loop([0,    4,    2,    1,    3,    0,    4,    2,    1,    3,    0,    4], 6),
              4
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 6 *****************************************/
    {
        time: 0,

        timings:  [ 
            500,
   ...loop([267,  433,  267,  133,  133,  133,  267,  400,  267,  133,  267,  267,  133,  133,  133,  267,  133,  500], 13),
          19620,
   ...loop([267,  433,  267,  133,  133,  133,  267,  400,  267,  133,  267,  267,  133,  133,  133,  267,  133,  500], 12),
              5
        ],
        sequence: [
              0,
     ...loop([1,    4,    2,    0,    3,    1,    2,    4,    0,    3,    1,    2,    4,    0,    1,    3,    2,    4], 13),
              0,
     ...loop([1,    4,    2,    0,    3,    1,    2,    4,    0,    3,    1,    2,    4,    0,    1,    3,    2,    4], 12),
              4
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 7 *****************************************/
    {
        time: 0,

        timings:  [ 
            500,  400,
   ...loop([ 67,   67,  200,   67,   67,  200,  300,   67,   67,  367,   67,   67,  133,  400,
             67,   67,  200,   67,   67,  200,  300,   67,   67,  367,   67,   67,   67,  100,  367,
             67,   67,  200,   67,   67,  233,  300,   67,   67,  367,   67,   67,  133,  400,
             67,   67,  200,   67,   67,  200,  300,   67,   67,  367,  133,  133,  400], 6),
          18886,  400,
   ...loop([ 67,   67,  200,   67,   67,  200,  300,   67,   67,  367,   67,   67,  133,  400,
             67,   67,  200,   67,   67,  200,  300,   67,   67,  367,   67,   67,   67,  100,  367,
             67,   67,  200,   67,   67,  233,  300,   67,   67,  367,   67,   67,  133,  400,
             67,   67,  200,   67,   67,  200,  300,   67,   67,  367,  133,  133,  400], 6),
              5
        ],
        sequence: [
              0,    1,
     ...loop([4,    3,    4,    2,    3,    2,    0,    2,    3,    2,    4,    3,    4,    1,
              4,    3,    4,    2,    3,    2,    0,    2,    3,    2,    3,    4,    3,    4,     1,
              4,    3,    4,    2,    3,    2,    0,    2,    3,    2,    4,    3,    4,    1,
              4,    3,    4,    2,    3,    2,    0,    2,    3,    2,    1,    0,    1], 6),
              0,    1,
     ...loop([4,    3,    4,    2,    3,    2,    0,    2,    3,    2,    4,    3,    4,    1,
              4,    3,    4,    2,    3,    2,    0,    2,    3,    2,    3,    4,    3,    4,     1,
              4,    3,    4,    2,    3,    2,    0,    2,    3,    2,    4,    3,    4,    1,
              4,    3,    4,    2,    3,    2,    0,    2,    3,    2,    1,    0,    1], 6),
              4
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 8 *****************************************/
    {
        time: 0,

        timings:  [ 
            500, 
   ...loop([267,  400,  400,  267,  400,  400,  267,  400,  133,  133,  267,  267,  267,  400], 11),
          19520, 
   ...loop([267,  400,  400,  267,  400,  400,  267,  400,  133,  133,  267,  267,  267,  400], 12),
              5
        ],
        sequence: [
              0,
     ...loop([4,    3,    2,    1,    0,    4,    3,    2,    1,    2,    0,    3,    2,    1], 11),
              0,
     ...loop([4,    3,    2,    1,    0,    4,    3,    2,    1,    2,    0,    3,    2,    1], 12),
              4
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 9 *****************************************/
    {
        time: 0,

        timings:  [ 
            500,
            133,  133,  133,  267,  133,  133,  133,  133,  133,  133,  133,  267,  267,
   ...loop([133,  133,  133,  267,  133,  133,  133,  133,  133,  133,  133,  267,  267,
            133,  133,  133,  267,  133,  133,  133,  133,  133,  133,  167,  267,  133,  133,
            133,  133,  133,  267,  133,  133,  133,  133,  133,  133,  133,  267,  267,
            133,  133,  133,  267,  133,  133,  133,  133,  133,  133,  167,  133,  133,  133,  133], 4),
          34202,
            133,  133,  133,  267,  133,  133,  133,  133,  133,  133,  167,  133,  133,  133,  133,
   ...loop([133,  133,  133,  267,  133,  133,  133,  133,  133,  133,  133,  267,  267,
            133,  133,  133,  267,  133,  133,  133,  133,  133,  133,  167,  267,  133,  133,
            133,  133,  133,  267,  133,  133,  133,  133,  133,  133,  133,  267,  267,
            133,  133,  133,  267,  133,  133,  133,  133,  133,  133,  167,  133,  133,  133,  133], 4),
              5
        ],
        sequence: [
              0,
              2,    0,    1,    4,    1,    4,    3,    0,    1,    2,    3,    0,    1,
     ...loop([2,    0,    1,    4,    1,    4,    3,    0,    1,    2,    3,    0,    1,
              2,    0,    1,    4,    1,    4,    3,    0,    1,    2,    3,    0,    1,    0,
              2,    0,    1,    4,    1,    4,    3,    0,    1,    2,    3,    0,    1,
              2,    0,    1,    4,    1,    4,    3,    0,    1,    2,    3,    0,    1,    0,    1], 4),
              0,
              2,    0,    1,    4,    1,    4,    3,    0,    1,    2,    3,    0,    1,    0,    1,
     ...loop([2,    0,    1,    4,    1,    4,    3,    0,    1,    2,    3,    0,    1,
              2,    0,    1,    4,    1,    4,    3,    0,    1,    2,    3,    0,    1,    0,
              2,    0,    1,    4,    1,    4,    3,    0,    1,    2,    3,    0,    1,
              2,    0,    1,    4,    1,    4,    3,    0,    1,    2,    3,    0,    1,    0,    1], 4),
              4
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 10 *****************************************/
    {
        time: 0,

        timings:  [ 
            500,
   ...loop([ ...Array(40).fill(67), 5873], 4),
            ...Array(40).fill(67),
            33934,
   ...loop([ ...Array(40).fill(67), 5873], 4),
              5
        ],
        sequence: [
              0,
     ...loop([1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 4], 4),
              1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2,
              0,
     ...loop([1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 4], 4),
              4
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 11 *****************************************/
    {
        time: 0,

        timings:  [ 
            500,
            400,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  267,  434,  400,  400,  400,  533,
            400,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  267,  400,  400,  400,  400,  567,
            400,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  267,  400,  400,  400,  400,  533,
            400,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,
          36537,
   ...loop([400,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  267,  434,  400,  400,  400,  533,
            400,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  267,  400,  400,  400,  400,  567,
            400,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  267,  400,  400,  400,  400,  533,
            400,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133,  133], 2),
              5
        ],
        sequence: [
              0,
              1,    3,    0,    3,    4,    2,    1,    0,    3,    1,    3,    1,    0,    4,    3,    2,    1,    0,
              1,    3,    0,    3,    4,    2,    1,    0,    3,    1,    3,    1,    0,    4,    3,    2,    1,    0,
              1,    3,    0,    3,    4,    2,    1,    0,    3,    1,    3,    1,    0,    4,    3,    2,    1,    0,
              1,    3,    0,    3,    4,    2,    1,    0,    3,    1,    3,    1,    3,    0,    1,    2,    3,    4,    2,    0,    1,    3,    2,    4,    0,    3,    1,    2,    4,    2,
              0,
     ...loop([1,    3,    0,    3,    4,    2,    1,    0,    3,    1,    3,    1,    0,    4,    3,    2,    1,    0,
              1,    3,    0,    3,    4,    2,    1,    0,    3,    1,    3,    1,    0,    4,    3,    2,    1,    0,
              1,    3,    0,    3,    4,    2,    1,    0,    3,    1,    3,    1,    0,    4,    3,    2,    1,    0,
              1,    3,    0,    3,    4,    2,    1,    0,    3,    1,    3,    1,    3,    0,    1,    2,    3,    4,    2,    0,    1,    3,    2,    4,    0,    3,    1,    2,    4,    2], 2),
              4
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 12 *****************************************/
    {
        time: 0,

        timings:  [ 
            500,
  ...loop([2236, 2102, 3270,  934, 2236, 2102, 3270, 1000], 4),
            100
        ],
        sequence: [
              0,
  ...loop([   1,    2,    3,    4,    0,    1,    2,    3], 4),
              0
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    },
    /***************************************** 13 *****************************************/
    {
        time: 0,

        timings:  [ 
            500,
             67,  67,  67,  67,  67,  67, 167, 133, 133, 133, 133, 133, 133, 133, 133, 133,  67,  
             67,  67,  67, 133, 133, 267, 133, 133, 133, 133, 133, 133,  67,  67,  67,  67, 133,
            100, 100, 100, 167, 100, 100, 267,  67,  67,  67,  67,  67,  67,  67,  67,  67,  67,
            133, 133, 133, 167,  67,  67,  67,  67,  67,  67, 133, 133, 133, 133, 133, 133, 133,
            133, 133, 133, 133, 133, 133, 133,  67,  67,  67,  67, 133, 133, 133, 133,
             67,  67,  67,  67,  67,  67, 133,  67,  67,  67,  67, 133, 133, 133,  67,  67, 133, 
            133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133,  67,  67,  67,  67, 
             67,  67, 133, 133, 133, 133, 133,  67,  67,  67, 133,  67,  67,  67,  67, 133,  67,  
             67,  67,  67, 100, 133, 133,  67,  67,  67,  67, 133, 133, 100, 133, 100, 100, 100,
            100,  67,  67, 133, 133, 133, 133, 133, 133, 100,  67,  67,  67,  67,  67,  67,  67, 
             67,  67,  67,  67,  67,  67
        ], 
        sequence: [
              0,
              1,   0,   1,   0,   1,   0,   1,   2,   3,   2,   4,   3,   2,   4,   3,   2,   1,
              0,   1,   0,   4,   3,   2,   0,   1,   2,   0,   1,   2,   4,   3,   4,   3,   1,   
              4,   1,   3,   0,   2,   3,   2,   0,   1,   0,   1,   0,   1,   4,   3,   4,   3,   
              2,   4,   3,   2,   0,   1,   0,   1,   0,   1,   3,   2,   1,   4,   2,   0,   1,   
              3,   4,   2,   3,   4,   3,   4,   2,   0,   1,   0,   2,   3,   3,   3,
              1,   0,   1,   0,   1,   0,   2,   4,   3,   4,   3,   0,   1,   3,   0,   1,   4,   
              3,   2,   3,   0,   4,   1,   2,   3,   0,   2,   3,   1,   2,   0,   3,   0,   3,   
              0,   3,   4,   0,   1,   0,   1,   2,   3,   2,   3,   4,   2,   3,   2,   3,   4,   
              2,   3,   2,   3,   4,   2,   1,   0,   1,   0,   3,   4,   2,   4,   0,   3,   2,   
              1,   3,   2,   3,   4,   0,   4,   1,   2,   4,   2,   3,   0,   1,   3,   1,   3,   
              1,   3,   1,   3,   1,   3
        ],
        frame: 0,
        start: -1,
        id: -1,
        tid: -1
    }
];

let windowDelays = [8867, 8433, 5233, 3200, 4566, 4000, 4567, 10433, 1568, 17651, 19286, 51018];
const offsX = 19, offsY = 33;

let currentRun = null;
let nextRunId = 0;

function loop(arr, times) {
    let r = [];
    for (let i = 0; i < times; i++) r = [...r, ...arr];
    return r;
}

function validateTimeline() {
    if (windowDelays.length !== WINDOW_INFO.length - 1) {
        throw new Error('windowDelays must contain one fewer item than WINDOW_INFO');
    }

    WINDOW_INFO.forEach(function(info, index) {
        if (info.timings.length !== info.sequence.length) {
            throw new Error(`Window ${index + 1} has mismatched timing data`);
        }
        if (info.timings.some(value => !Number.isInteger(value) || value <= 0)) {
            throw new Error(`Window ${index + 1} has an invalid duration`);
        }
        if (info.sequence.some(value => !Number.isInteger(value) || value < 0 || value > 4)) {
            throw new Error(`Window ${index + 1} has an invalid tab position`);
        }
    });
}

validateTimeline();

function onError(error) {
    console.error(`WT: ${error && error.message ? error.message : error}`);
}

function scheduleAt(run, dueAt, callback) {
    if (!run.active || currentRun !== run) return;

    const timer = setTimeout(function() {
        run.timers.delete(timer);
        if (!run.active || currentRun !== run) return;
        Promise.resolve().then(callback).catch(onError);
    }, Math.max(0, dueAt - performance.now()));

    run.timers.add(timer);
}

async function stopRun(run) {
    if (!run) return;

    run.active = false;
    for (const timer of run.timers) clearTimeout(timer);
    run.timers.clear();

    await Promise.allSettled(
        [...run.windowIds].map(id => browser.windows.remove(id))
    );
    run.windowIds.clear();
}

function createRunState(info) {
    return {
        info,
        time: 0,
        frame: 0,
        start: -1,
        id: -1,
        tid: -1,
        lastPosition: 0,
        skippedFrames: 0,
        moves: 0,
        maxMoveTime: 0,
        finished: false
    };
}

async function init() {
    const requestedRunId = ++nextRunId;
    const previousRun = currentRun;
    await stopRun(previousRun);

    // A newer click superseded this one while window cleanup was in progress.
    if (requestedRunId !== nextRunId) return;

    const run = {
        id: requestedRunId,
        active: true,
        startedAt: performance.now(),
        timers: new Set(),
        windowIds: new Set(),
        states: WINDOW_INFO.map(createRunState)
    };
    currentRun = run;
    openWindow(0, run, 0);
}

function openWindow(index, run, startOffset) {
    if (!run.active || currentRun !== run || index >= run.states.length) return;

    if (index + 1 < run.states.length) {
        const nextOffset = startOffset + windowDelays[index];
        scheduleAt(run, run.startedAt + nextOffset, function() {
            openWindow(index + 1, run, nextOffset);
        });
    }

    const n = index + 1;
    const baseUrl = `http://localhost/wt/w.php?n=${n}&run=${run.id}`;
    const urls = [
        `${baseUrl}&slot=0`,
        ...Array.from({length: 4}, (_, slot) =>
            `${baseUrl}&slot=${slot + 1}&unselected=true`
        )
    ];

    browser.windows.create({
        url: urls,
        width: 900,
        height: 300,
        top: 200 + (index * offsY),
        left: 200 + (index * offsX)
    }).then(async function(w) {
        if (!run.active || currentRun !== run) {
            await browser.windows.remove(w.id).catch(onError);
            return;
        }

        if (!w.tabs || !w.tabs[0]) {
            throw new Error(`Window ${index + 1} was created without tabs`);
        }

        const state = run.states[index];
        run.windowIds.add(w.id);
        state.start = run.startedAt + startOffset;
        state.id = w.id;
        state.tid = w.tabs[0].id;
        state.lastPosition = 0;
        await tickSequence(index, run);
    }).catch(onError);
}

async function moveTab(state, position, run) {
    if (state.lastPosition === position) return true;

    const startedAt = performance.now();
    try {
        await browser.tabs.move(state.tid, {index: position});
        if (!run.active || currentRun !== run) return false;

        state.lastPosition = position;
        state.moves++;
        state.maxMoveTime = Math.max(
            state.maxMoveTime,
            performance.now() - startedAt
        );
        return true;
    } catch (error) {
        if (run.active && currentRun === run) onError(error);
        state.finished = true;
        return false;
    }
}

function reportState(index, state) {
    if (state.finished) return;
    state.finished = true;
    console.info(
        `WT window ${index + 1}: ${state.moves} moves, ` +
        `${state.skippedFrames} skipped, ` +
        `max API ${state.maxMoveTime.toFixed(1)}ms`
    );
}

async function tickSequence(index, run) {
    if (!run.active || currentRun !== run) return;

    const state = run.states[index];
    if (state.finished) return;

    const {sequence, timings} = state.info;
    const frameCount = sequence.length;
    const elapsed = performance.now() - state.start;

    // Keep only the state that should be visible now. Expired moves are never
    // queued, so Firefox cannot accumulate an ever-growing UI backlog.
    while (
        state.frame < frameCount &&
        state.time + timings[state.frame] <= elapsed
    ) {
        state.time += timings[state.frame];
        state.frame++;
        state.skippedFrames++;
    }

    // Always leave the tab at the authored final position, even when the last
    // very short frame expired before Firefox finished the previous move.
    if (state.frame >= frameCount) {
        await moveTab(state, sequence[frameCount - 1], run);
        reportState(index, state);
        return;
    }

    const frame = state.frame;
    const moved = await moveTab(state, sequence[frame], run);
    if (!moved || !run.active || currentRun !== run) return;

    state.time += timings[frame];
    state.frame = frame + 1;

    if (state.frame < frameCount) {
        scheduleAt(run, state.start + state.time, function() {
            return tickSequence(index, run);
        });
    } else {
        reportState(index, state);
    }
}

browser.browserAction.onClicked.addListener(function() {
    init().catch(onError);
});