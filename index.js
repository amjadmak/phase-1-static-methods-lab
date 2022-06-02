class Formatter {
  static capitalize( string ) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }

  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize( sentence ) {
    let notCapital = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let finalResult = [];
    let splittedScentence = sentence.split( " " )
    for ( let n = 0; n < splittedScentence.length; n++ ) {
      if ( n == 0 ) {
        finalResult.push( this.capitalize( splittedScentence[ n ] ) )
      } else {
        if ( notCapital.includes( splittedScentence[ n ] ) ) {
          finalResult.push( splittedScentence[ n ] )
        } else {
          finalResult.push( this.capitalize( splittedScentence[ n ] ) )
        }
      }

    }
    return finalResult.join( " " );
  }
}