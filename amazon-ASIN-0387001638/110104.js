
// call this like so:
//    node pc110104.js 110104.txt

/* jslint node: true */
"use strict";

var fs = require('fs');

//console.log(process.argv[0]); // 'node'
//console.log(process.argv[1]); // this js file name

var numeralPrinters = [];

// helper function for repeating a string.
// for example, to turn ( '-', 5 ) into '-----'
function reps( s, n )
{
    // create an array filled with nulls.
    // call the join method with 's' as the SEPARATOR.
    // this is a sort of hack. normally you might have:
    //   [ 4, 5, 1, 2 ]  and then use join(':') to generate
    //   a string like:  4:5:1:2

    // this is rather 'classic' (all over stackoverflow, anyway), but jslint balks:
    //return new Array( parseInt(n,10) + 1 ).join( s );

    // the more terse version is above. here is one that jslint accepts:
    var arr = [];
    arr.length = parseInt(n,10) + 1;
    return arr.join( s );
}

function padRight( a )
{
    var i = 0;

    for ( i = 0; i < a.length; i++ )
    {
        a[ i ] += ' ';
    }
}

/*
zero:

 --
|  |
|  |

|  |
|  |
 --

*/
numeralPrinters[0] = function ( ns, a )
{
    var j = 0;
    var k = 0;

    a[0] += ' ';
    a[0] += reps( '-', ns );
    a[0] += ' ';

    for ( j = 0; j < ns; j++ )
    {
        a[1+j] += '|';
        a[1+j] += reps( ' ', ns );
        a[1+j] += '|';
    }

    a[1+j] += ' ';
    a[1+j] += reps( ' ', ns );
    a[1+j] += ' ';

    for ( k = 0; k < ns; k++ )
    {
        a[2+j+k] += '|';
        a[2+j+k] += reps( ' ', ns );
        a[2+j+k] += '|';
    }

    a[2+j+k] += ' ';
    a[2+j+k] += reps( '-', ns );
    a[2+j+k] += ' ';
};

/*
one:

|
|

|
|

*/

numeralPrinters[1] = function ( ns, a )
{
    var j = 0;
    var k = 0;

    a[0] += ' ';

    for ( j = 0; j < ns; j++ )
    {
        a[1+j] += '|';
    }

    a[1+j] += ' ';

    for ( k = 0; k < ns; k++ )
    {
        a[2+j+k] += '|';
    }

    a[2+j+k] += ' ';
};

/*
two:

 --
   |
   |
 --
|
|
 --

*/
numeralPrinters[2] = function ( ns, a )
{
    var j = 0;
    var k = 0;

    a[0] += ' ';
    a[0] += reps( '-', ns );
    a[0] += ' ';

    for ( j = 0; j < ns; j++ )
    {
        a[1+j] += ' ';
        a[1+j] += reps( ' ', ns );
        a[1+j] += '|';
    }

    a[1+j] += ' ';
    a[1+j] += reps( '-', ns );
    a[1+j] += ' ';

    for ( k = 0; k < ns; k++ )
    {
        a[2+j+k] += '|';
        a[2+j+k] += reps( ' ', ns );
        a[2+j+k] += ' ';
    }

    a[2+j+k] += ' ';
    a[2+j+k] += reps( '-', ns );
    a[2+j+k] += ' ';
};

numeralPrinters[3] = function ( ns, a )
{
    var j = 0;
    var k = 0;

    a[0] += ' ';
    a[0] += reps( '-', ns );
    a[0] += ' ';

    for ( j = 0; j < ns; j++ )
    {
        a[1+j] += ' ';
        a[1+j] += reps( ' ', ns );
        a[1+j] += '|';
    }

    a[1+j] += ' ';
    a[1+j] += reps( '-', ns );
    a[1+j] += ' ';

    for ( k = 0; k < ns; k++ )
    {
        a[2+j+k] += ' ';
        a[2+j+k] += reps( ' ', ns );
        a[2+j+k] += '|';
    }

    a[2+j+k] += ' ';
    a[2+j+k] += reps( '-', ns );
    a[2+j+k] += ' ';
};

numeralPrinters[4] = function ( ns, a )
{
    var j = 0;
    var k = 0;

    a[0] += ' ';
    a[0] += reps( ' ', ns );
    a[0] += ' ';

    for ( j = 0; j < ns; j++ )
    {
        a[1+j] += '|';
        a[1+j] += reps( ' ', ns );
        a[1+j] += '|';
    }

    a[1+j] += ' ';
    a[1+j] += reps( '-', ns );
    a[1+j] += ' ';

    for ( k = 0; k < ns; k++ )
    {
        a[2+j+k] += ' ';
        a[2+j+k] += reps( ' ', ns );
        a[2+j+k] += '|';
    }

    a[2+j+k] += ' ';
    a[2+j+k] += reps( ' ', ns );
    a[2+j+k] += ' ';
};

numeralPrinters[5] = function ( ns, a )
{
    var j = 0;
    var k = 0;

    a[0] += ' ';
    a[0] += reps( '-', ns );
    a[0] += ' ';

    for ( j = 0; j < ns; j++ )
    {
        a[1+j] += '|';
        a[1+j] += reps( ' ', ns );
        a[1+j] += ' ';
    }

    a[1+j] += ' ';
    a[1+j] += reps( '-', ns );
    a[1+j] += ' ';

    for ( k = 0; k < ns; k++ )
    {
        a[2+j+k] += ' ';
        a[2+j+k] += reps( ' ', ns );
        a[2+j+k] += '|';
    }

    a[2+j+k] += ' ';
    a[2+j+k] += reps( '-', ns );
    a[2+j+k] += ' ';
};

numeralPrinters[6] = function ( ns, a )
{
    var j = 0;
    var k = 0;

    a[0] += ' ';
    a[0] += reps( '-', ns );
    a[0] += ' ';

    for ( j = 0; j < ns; j++ )
    {
        a[1+j] += '|';
        a[1+j] += reps( ' ', ns );
        a[1+j] += ' ';
    }

    a[1+j] += ' ';
    a[1+j] += reps( '-', ns );
    a[1+j] += ' ';

    for ( k = 0; k < ns; k++ )
    {
        a[2+j+k] += '|';
        a[2+j+k] += reps( ' ', ns );
        a[2+j+k] += '|';
    }

    a[2+j+k] += ' ';
    a[2+j+k] += reps( '-', ns );
    a[2+j+k] += ' ';
};

numeralPrinters[7] = function ( ns, a )
{
    var j = 0;
    var k = 0;

    a[0] += ' ';
    a[0] += reps( '-', ns );
    a[0] += ' ';

    for ( j = 0; j < ns; j++ )
    {
        a[1+j] += ' ';
        a[1+j] += reps( ' ', ns );
        a[1+j] += '|';
    }

    a[1+j] += ' ';
    a[1+j] += reps( ' ', ns );
    a[1+j] += ' ';

    for ( k = 0; k < ns; k++ )
    {
        a[2+j+k] += ' ';
        a[2+j+k] += reps( ' ', ns );
        a[2+j+k] += '|';
    }

    a[2+j+k] += ' ';
    a[2+j+k] += reps( ' ', ns );
    a[2+j+k] += ' ';
};

numeralPrinters[8] = function ( ns, a )
{
    var j = 0;
    var k = 0;

    a[0] += ' ';
    a[0] += reps( '-', ns );
    a[0] += ' ';

    for ( j = 0; j < ns; j++ )
    {
        a[1+j] += '|';
        a[1+j] += reps( ' ', ns );
        a[1+j] += '|';
    }

    a[1+j] += ' ';
    a[1+j] += reps( '-', ns );
    a[1+j] += ' ';

    for ( k = 0; k < ns; k++ )
    {
        a[2+j+k] += '|';
        a[2+j+k] += reps( ' ', ns );
        a[2+j+k] += '|';
    }

    a[2+j+k] += ' ';
    a[2+j+k] += reps( '-', ns );
    a[2+j+k] += ' ';
};

numeralPrinters[9] = function ( ns, a )
{
    var j = 0;
    var k = 0;

    a[0] += ' ';
    a[0] += reps( '-', ns );
    a[0] += ' ';

    for ( j = 0; j < ns; j++ )
    {
        a[1+j] += '|';
        a[1+j] += reps( ' ', ns );
        a[1+j] += '|';
    }

    a[1+j] += ' ';
    a[1+j] += reps( '-', ns );
    a[1+j] += ' ';

    for ( k = 0; k < ns; k++ )
    {
        a[2+j+k] += ' ';
        a[2+j+k] += reps( ' ', ns );
        a[2+j+k] += '|';
    }

    a[2+j+k] += ' ';
    a[2+j+k] += reps( '-', ns );
    a[2+j+k] += ' ';
};

function PrintableNumRow( numeralSize, printedText )
{
    var ns = numeralSize;
    var x = 0;
    var i = 0;
    var num = 0;

    if ( ns < 1 || ns > 10 )
    {
        ns = 1;
    }

    // a two-dimensional grid holding all the spaces,
    // pipe chars, and hypens of the 'LCD' numerals
    var printerGrid = [ '', '', '', '', '' ];
    for ( x = 0; x < ((ns-1)*2); x++ )
    {
        printerGrid[ printerGrid.length ] = '';
    }

    for ( i = 0; i < printedText.toString().length; i++ )
    {
        num = printedText.charAt(i).valueOf();
        if ( num < 0 || num > 9 )
        {
            num = 0;
        }

        // lookup the function (0 thru 9), and have
        // the indicated function add more chars to
        // the printerGrid
        numeralPrinters[num]( ns, printerGrid );

        // add one column of blanks between two digits
        padRight( printerGrid );
    }

    this.printToConsole = function()
    {
        for ( i = 0; i < printerGrid.length; i++ )
        {
            console.log( printerGrid[ i ] );
        }
    };
}



function BatchOfNumRows( maxRowCount )
{
    var max = maxRowCount;
    if ( max < 1 )
    {
        max = 1;
    }
    if ( max > 1000 )
    {
        max = 1000;
    }

    var numRows = [];

    this.addRow = function( s, t )
    {
        if ( numRows.length < max )
        {
            numRows[ numRows.length ] = new PrintableNumRow( s, t );
        }
    };

    this.dumpOutput = function()
    {
        var i = 0;

        for( i = 0; i < numRows.length; i++ )
        {
            numRows[ i ].printToConsole();
            // output one blank line after each number
            console.log( '' );
        }
    };
}

BatchOfNumRows.prototype.parseAndAdd = function(chunk)
{
    var rows = chunk.toString().split('\n');
    var i = 0, words = 0;

    for( i = 0; i < rows.length; i++ )
    {
        words = rows[i].split(' ');
        if ( words && words.length > 1 )
        {
            // a line containing two zeroes means to terminate.
            if ( words[0] === '0' && words[1] === '0' )
            {
                break;
            }

            // each line contains 's' and 'n', where n is the
            // number to be displayed, and s is the 'font size'
            this.addRow( words[0], words[1] );
        }
    }
};

function streamError()
{
    console.log('stream error');
}

var input = process.argv[2];

var batch = new BatchOfNumRows( 50 );

var s = fs.ReadStream(input);

s.on('error', streamError );

s.on('end', batch.dumpOutput );

s.on('data', function(chunk){ batch.parseAndAdd(chunk); } );

// this alternative also works:
//      s.on('data', batch.parseAndAdd.bind( batch ) );



