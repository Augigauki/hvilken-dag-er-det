const computus = ( y: number ) => {

    var date, a, b, c, m, d;

    // Instantiate the date object.
    date = new Date;

    // Set the timestamp to midnight.
    date.setHours( 0, 0, 0, 0 );

    // Set the year.
    date.setFullYear( y );

    // Find the golden number.
    a = y % 19;

    // Choose which version of the algorithm to use based on the given year.
    b = ( 2200 <= y && y <= 2299 ) ?
        ( ( 11 * a ) + 4 ) % 30 :
        ( ( 11 * a ) + 5 ) % 30;

    // Determine whether or not to compensate for the previous step.
    c = ( ( b === 0 ) || ( b === 1 && a > 10 ) ) ?
        ( b + 1 ) :
        b;

    // Use c first to find the month: April or March.
    m = ( 1 <= c && c <= 19 ) ? 3 : 2;

    // Then use c to find the full moon after the northward equinox.
    d = ( 50 - c ) % 31;

    // Mark the date of that full moon—the "Paschal" full moon.
    date.setMonth( m, d )
    return date;
}

export default computus;