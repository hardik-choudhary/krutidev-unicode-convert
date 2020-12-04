function convert_to_unicode()
{

var array_one = new Array( 

"aa" ,	"a" ,
"ZZ" ,	"Z" ,
"=kk" ,	"=k" ,
"f=k" ,	"f=" ,

"Q+Z" ,	"QZ+" ,
"sas" ,	"sa" ,

"‘" ,	"\"" ,
"’" ,	"\"" ,
"“" ,	"'" ,
"”" ,	"'" ,

"ƒ" ,	"१" ,
"„" ,	"२" ,
"…" ,	"३" ,
"†" ,	"४" ,
"‡" ,	"५" ,
"ˆ" ,	"६" ,
"‰" ,	"७" ,
"Š" ,	"८" ,
"‹" ,	"९" ,
"Œ" ,	"०" ,
"å" ,	"०" ,

"v‚" ,	"ऑ" ,
"vks" ,	"ओ" ,
"vkS" ,	"औ" ,
"vk" ,	"आ" ,
"v" ,	"अ" ,
"b±" ,	"ईं" ,
"Ã" ,	"ई" ,
"bZ" ,	"ई" ,
"b" ,	"इ" ,
"m" ,	"उ" ,
"Å" ,	"ऊ" ,
",s" ,	"ऐ" ,
"," ,	"ए" ,
"_" ,	"ऋ" ,


"d+" ,	"क़" ,
"[+" ,	"ख़्" ,
"x+" ,	"ग़" ,
"T+" ,	"ज़्" ,
"t+" ,	"ज़" ,
"M+" ,	"ड़" ,
"<+" ,	"ढ़" ,
"¶+" ,	"फ़्" ,
"Q+" ,	"फ़" ,
";+" ,	"य़" ,
"j+" ,	"ऱ" ,
"u+" ,	"ऩ" ,

"d" ,	"क" ,
"D" ,	"क्" ,
"£" ,	"ख्र" ,
"[" ,	"ख्" ,
"x" ,	"ग" ,
"X" ,	"ग्" ,
"Ä" ,	"घ" ,
"?" ,	"घ्" ,
"³" ,	"ङ" ,
"p" ,	"च" ,
"P" ,	"च्" ,
"N" ,	"छ" ,
"t" ,	"ज" ,
"T" ,	"ज्" ,
">" ,	"झ" ,
"÷" ,	"झ्" ,
"Ö" ,	"झ्" ,
"¥" ,	"ञ" ,
"V" ,	"ट" ,
"B" ,	"ठ" ,
"M" ,	"ड" ,
"<" ,	"ढ" ,
"." ,	"ण्" ,
"r" ,	"त" ,
"R" ,	"त्" ,
"F" ,	"थ्" ,
"n" ,	"द" ,
"/" ,	"ध्" ,
"Ë" ,	"ध्" ,
"è" ,	"ध्" ,
"u" ,	"न" ,
"U" ,	"न्" ,
"i" ,	"प" ,
"I" ,	"प्" ,
"Q" ,	"फ" ,
"¶" ,	"फ्" ,
"c" ,	"ब" ,
"C" ,	"ब्" ,
"Ò" ,	"भ" ,
"H" ,	"भ्" ,
"e" ,	"म" ,
"E" ,	"म्" ,
";" ,	"य" ,
"¸" ,	"य्" ,
"j" ,	"र" ,
"y" ,	"ल" ,
"Y" ,	"ल्" ,
"G" ,	"ळ" ,
"Üo" ,	"श्व" ,
"Ük" ,	"श" , // as used in 'shringaal' etc
"Üz" ,	"श्र्" ,
"o" ,	"व" ,
"O" ,	"व्" ,

"'" ,	"श्" ,
"\"" ,	"ष्" ,
"l" ,	"स" ,
"L" ,	"स्" ,
"g" ,	"ह" ,

"Ñ" ,	"कृ" ,
"—" ,	"कृ" ,
"ô" ,	"क्क" ,
"ä" ,	"क्त" ,
"{" ,	"क्ष्" ,
"K" ,	"ज्ञ" ,

"ê" ,	"ट्ट" ,
"Í" ,	"ट्ट" ,
"ë" ,	"ट्ठ" ,
"Î" ,	"ट्ठ" ,
"ð" ,	"ठ्ठ" ,
"Ï" ,	"ड्ड" ,
"ì" ,	"ड्ड" ,
"ï" ,	"ड्ढ" ,
"Ô" ,	"ड्ढ" ,

"Ù" ,	"त्त्" ,
"=" ,	"त्र" ,
"«" ,	"त्र्" ,
"–" ,	"दृ" ,
"Ì" ,	"द्द" ,
"í" ,	"द्द" ,
"\)" ,	"द्ध" ,
"˜" ,	"द्भ" ,
"ö" ,	"द्भ" ,
"|" ,	"द्य" ,
"}" ,	"द्व" ,
"é" ,	"न्न" ,
"™" ,	"न्न्" ,

"ó" ,	"स्त्र" ,
"â" ,	"हृ" ,
"à" ,	"ह्न" ,
"ã" ,	"ह्म" ,
"á" ,	"ह्य" ,
"º" ,	"ह्" ,

"J" ,	"श्र" ,
"Ø" ,	"क्र" ,
"Ý" ,	"फ्र" ,
"æ" ,	"द्र" ,
"ç" ,	"प्र" ,
"Á" ,	"प्र" ,
"#" ,	"रु" ,
":" ,	"रू" ,

"Ó" ,	"्य" ,
"î" ,	"्य" ,
"z" ,	"्र" ,
"ª" ,	"्र" ,

// "Ç" ,	"िं", 
"È" ,	"ीं" ,
"Ê" ,	"Zी" ,
"\›" ,	"Zैं" ,
"õ" ,	"Zैं" ,
"±"  ,	"Zं" ,
"Æ" ,	"र्f" ,
"É" ,	"र्Ç" ,

"्k" ,	"" , 

"‚" ,	"ॉ" ,
"¨" ,	"ो" ,
"®" ,	"ो" ,
"ks" ,	"ो" ,
"©" ,	"ौ" ,
"kS" ,	"ौ" ,
"h" ,	"ी" ,
"q" ,	"ु" ,
"w" ,	"ू" ,
"`" ,	"ृ" , 
"s" ,	"े" ,
"¢" ,	"े" , //suitable for ka
"S" ,	"ै" ,
"a" ,	"ं" ,
"¡" ,	"ँ" ,
"%" ,	"ः" ,
"W" ,	"ॅ" ,
"•" ,	"ऽ" ,
"·" ,	"ऽ" ,
"∙" ,	"ऽ" ,
"·" ,	"ऽ" ,
"~" ,	"्" ,
"+" ,	"़" ,
"k" ,	"ा" ,

"A" ,	"।" ,
"ñ" ,	"॰" ,  // laaghava

"\\" ,	"?" ,
" ः" ,	" :" ,
"^" ,	"‘" ,
"*" ,	"’" ,
"Þ" ,	"“" ,
"ß" ,	"”" ,
"(" ,	";" ,
"¼" ,	"(" ,
"½" ,	")" ,
"¿" ,	"{" ,
"À" ,	"}" ,
"¾" ,	"=" ,
"-" ,	"." , // full stop?
"&" ,	"-" ,
//"&" ,	"µ" ,
"]" ,	"," ,
"@" ,	"/" ,

"~ " ,	"् " ,
"ाे" ,	"ो" ,
"ाॅ" ,	"ॉ" ,
"े्र" ,	"्रे" ,
"अौ" ,	"औ" ,
"अो" ,	"ओ" ,
"आॅ" ,	"ऑ" 		)


var array_one_length = array_one.length ;

var modified_substring = document.getElementById("legacy_text").value  ;

//************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//*************************************************************
    var text_size = document.getElementById("legacy_text").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 6000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
	  while ( (document.getElementById("legacy_text").value.charAt( sthiti2 ) != '\n')&(document.getElementById("legacy_text").value.charAt( sthiti2 ) != '\t')&(document.getElementById("legacy_text").value.charAt( sthiti2 ) != ' ') )   {sthiti2-- ;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("legacy_text").value.substring ( sthiti1, sthiti2 )  ;

    Replace_Symbols( ) ;

    processed_text += modified_substring ;

//***************************************************************
//  Breaking part code over
//***************************************************************
 

    document.getElementById("unicode_text").value = processed_text  ;
   }


// --------------------------------------------------

function Replace_Symbols( )
{

//substitute array_two elements in place of corresponding array_one elements

if ( modified_substring != "" )  // if stringto be converted is non-blank then no need of any processing.
{
for ( input_symbol_idx = 0;   input_symbol_idx < array_one_length-1;    input_symbol_idx=input_symbol_idx+2 )

{

idx = 0  ;  // index of the symbol being searched for replacement

while (idx != -1 ) //whie-00
{

modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_one[input_symbol_idx+1] )
idx = modified_substring.indexOf( array_one[input_symbol_idx] )

} // end of while-00 loop
} // end of for loop


// following statements for adjusting postion of i maatraas.

modified_substring = modified_substring.replace(   /([fÇ])([कखगघङचछजझञटठडड़ढढ़णतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])/g , "$2$1" ) ;

modified_substring = modified_substring.replace(   /([fÇ])(्)([कखगघङचछजझञटठडड़ढढ़णतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])/g , "$2$3$1" ) ;

modified_substring = modified_substring.replace(   /([fÇ])(्)([कखगघङचछजझञटठडड़ढढ़णतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])/g , "$2$3$1" ) ;

modified_substring = modified_substring.replace( /f/g , "ि" ) ;
modified_substring = modified_substring.replace( /Ç/g , "िं" ) ;


//following three statement for adjusting position of reph ie, half r .
modified_substring = modified_substring.replace( /([कखगघङचछजझञटठडड़ढढ़णतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])([ािीुूृेैोौंँ]*)([Z])/g , "$3$1$2" ) ;

modified_substring = modified_substring.replace( /([कखगघङचछजझञटठडड़ढढ़णतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])([्])([Z])/g , "$3$1$2" ) ;

modified_substring = modified_substring.replace( /([कखगघङचछजझञटठडड़ढढ़णतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])([्])([Z])/g , "$3$1$2" ) ;

modified_substring = modified_substring.replace( /Z/g , "र्" ) ;

// remove maatras typed wrongly
modified_substring = modified_substring.replace( /([ंँ॰])([ािीुूृेैोौ])/g , "$2$1" );

modified_substring = modified_substring.replace( /([ािीुूृेैोौंँ])([ािीुूृेैोौ])/g , "$1" ) ;

} // end of IF  statement  meant to  supress processing of  blank  string.

} // end of the function  Replace_Symbols
 
} // end of Krutidev_to_unicode function

//************************************************************************
function Convert_to_Krutidev_010()
{

var array_one = new Array(

"'" ,	"\*" ,
"\"" ,	"Þ" ,
"‘" ,	"\^" ,
"’" ,	"\*" ,
"“" ,	"Þ" ,
"”" ,	"ß" ,
"\(" ,	"¼" ,
"\)" ,	"½" ,
"\{" ,	"¿" ,
"\}" ,	"À" ,
"\[" ,	"¼" , // there is no symbol for [ in Krutidev.
"\]" ,	"½" , // there is no symbol for ] in Krutidev.

"_" ,	"\&" ,
"-" ,	"\&" ,
"x" ,	"Û" ,
"\+" ,	"$" ,
"\=" ,	"¾" ,

"।" ,		"A" ,
"॰" ,		"ñ" , // laaghava
"." ,	"-" , // Full stop
"?" ,	"\\" ,
"\," ,	"\]" ,
"%" ,	"þ" , // Kaamachalaaoo.
"\:" ,	"%" , 
"\;" ,	"\(" ,
"\/" ,	"@" ,
// There is no symbol in Krutidev for hash (#).
"#" , "ü" , // Kaamachalaaoo.

// ú û ü ý þ ÿ  remain unchanged in Krutidev.


"०" ,		"å" ,
"१" ,		"ƒ" ,
"२" ,		"„" ,
"३" ,		"…" ,
"४" ,		"†" ,
"५" ,		"‡" ,
"६" ,		"ˆ" ,
"७" ,		"‰" ,
"८" ,		"Š" ,
"९" ,		"\‹" ,

"क़्" ,	"D\+" ,
"ख़्" ,	"\[\+" ,
"ग़्" ,	"X+" ,
"ज़्" ,	"T\+" ,
"ऩ्" ,	"U\+" ,
"फ़्" ,	"¶\+" ,
"य़्" ,	"¸\+" ,

"क़" ,	"d\+" ,
"ख़" ,	"[k\+" ,
"ग़" ,	"x\+" ,
"ज़" ,	"t\+" ,
"ड़" ,		"M\+" ,
"ढ़" ,		"<\+" ,
"ऩ" ,	"u\+" ,
"फ़" ,	"Q\+" ,
"य़" ,	";\+" ,
"ऱ" ,		"j\+" ,

"कृ" ,	"—" ,
"क्क" ,	"ô" ,
"क्त" ,	"ä" ,
"क्ष्" ,	"\{" ,
"क्ष" ,	"\{k" ,
"ज्ञ्" ,	"K~" ,
"ज्ञ" ,	"K" ,

"ट्ट" ,	"ê" ,
"ट्ठ" ,	"ë" ,
"ड्ड" ,	"ì" ,
"ड्ढ" ,	"ï" ,

"त्त्" ,	"Ù" ,
"त्त" ,	"Ùk" ,
"त्र्" ,	"«" ,
"त्र" ,	"\=" ,

"दृ" ,	"–" ,
"द्द" ,	"í" ,
"द्ध" ,	"\)" ,
"द्य" ,	"\|" ,
"द्व" ,	"\}" ,

"छ्य" ,	"Nî" ,
"ट्य" ,	"Vî" ,
"ठ्य" ,	"Bî" ,
"ड्य" ,	"Mî" ,
"ढ्य" ,	"\<î" ,

"छ्र" ,	"Nª" ,
"ट्र" ,	"Vª" ,
"ठ्र" ,	"Bª" ,
"ड्र" ,	"Mª" ,
"ढ्र" ,	"<ª" ,

"क्र" ,	"Ø" ,
"द्र" ,	"æ" ,
"प्र" ,	"ç" ,
"फ्र" ,	"Ý" ,
"श्र्" ,	"Üz" ,
"श्र" ,	"J" ,

"शृ" ,	"Ük`" , // spacial form
"श्व" ,	"Üo" , // spacial form

"हृ" ,	"â" ,
"ह्न" ,	"à" ,
"ह्म" ,	"ã" ,
"ह्य" ,	"á" ,
"ह्र" ,	"ºz" ,
"ह्" ,	"º" ,

"्र" ,	"z" ,

"रु" ,	"\#" ,
"रू" ,	"\:" ,

"ओ" ,	"vks" ,
"औ" ,	"vkS" ,
"ऑ" ,	"v‚" ,
"आ" ,	"vk" ,
"अ" ,	"v" ,
"ईं" ,	"b±" ,
"ई" ,	"Ã" ,
//"ई" ,		"bZ" ,
"इ" ,	"b" ,
"उ" ,	"m" ,
"ऊ" ,	"Å" ,
"ऐ" ,	"\,s" ,
"ए" ,	"\," ,
"ऋ" ,	"_" ,

"क्" ,	"D" ,
"क" ,	"d" ,
"ख्" ,	"\[" ,
"ख" ,	"\[k" ,
"ग्" ,	"X" ,
"ग" ,	"x" ,
"घ्" ,	"\?" ,
"घ" ,	"\?k" ,
"ङ" ,		"³" ,

"च्" ,	"P" ,
"च" ,	"p" ,
"छ" ,	"N" ,
"ज्" ,	"T" ,
"ज" ,	"t" ,
"झ्" ,	"÷" ,
"झ" ,	"\>" ,
"ञ" ,	"¥" ,
"ट" ,	"V" ,
"ठ" ,	"B" ,
"ड" ,	"M" ,
"ढ" ,	"\<" ,
"ण्" ,	"." ,
"ण" ,	".k" ,
"त्" ,	"R" ,
"त" ,	"r" ,
"थ्" ,	"F" ,
"थ" ,	"Fk" ,
"द" ,	"n" ,
"ध्" ,	"è" ,
"ध" ,	"èk" ,
"न्" ,	"U" ,
"न" ,	"u" ,
"प्" ,	"I" ,
"प" ,	"i" ,
"फ्" ,	"¶" ,
"फ" ,	"Q" ,
"ब्" ,	"C" ,
"ब" ,	"c" ,
"भ्" ,	"H" ,
"भ" ,	"Hk" ,
"म्" ,	"E" ,
"म" ,	"e" ,
"य्" ,	"¸" ,
"य" ,	"\;" ,
"र" ,	"j" ,
"ल्" ,	"Y" ,
"ल" ,	"y" ,
"ळ" ,	"G" ,
"व्" ,	"O" ,
"व" ,	"o" ,
"श्" ,	"\'" ,
"श" ,	"\'k" ,
"ष्" ,	"\"" ,
"ष" ,	"\"k" ,
"स्" ,	"L" ,
"स" ,	"l" ,
"ह" ,	"g" ,

"ॉ" ,	"\‚" ,
"ॅ" ,	"W" ,
"ो" ,	"ks" ,
"ौ" ,	"kS" ,
"ा" ,	"k" ,
"ीं" ,	"È" ,
"ी" ,	"h" ,
"ु" ,	"q" ,
"ू" ,	"w" ,
"ृ" ,	"`" ,
"े" ,	"s" ,
"ै" ,	"S" ,
"ं" ,	"a" ,
"ँ" ,	"¡" ,
"ः" ,	"%" ,
"ऽ" ,	"·" ,
"्" ,	"~" ,
"़" ,	"\+" 	 );
  
var array_one_length = array_one.length ;

var modified_substring = document.getElementById("unicode_text").value + " " ;	// an space added to help recognise halant at the end of file

document.getElementById("legacy_text").value = "Conversion in progress.."  ;  

//*************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//*************************************************************
    var text_size = modified_substring.length ;	
	
    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 6000;


    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
	  while ( (document.getElementById("unicode_text").value.charAt( sthiti2 ) != '\n')&(document.getElementById("unicode_text").value.charAt( sthiti2 ) != '\t')&(document.getElementById("unicode_text").value.charAt( sthiti2 ) != ' ') )   {sthiti2-- ;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("unicode_text").value.substring ( sthiti1, sthiti2 )  ;

//**********************************************************
//  Breaking part code over
//**********************************************************

	 Replace_Symbols( ) ;

    processed_text += modified_substring ;

    document.getElementById("legacy_text").value = processed_text  ;
   }


//**************************************************

function Replace_Symbols( )
   {

    // if string to be converted is non-blank then no need of any processing.
    if (modified_substring != "" )  
       {

// replace the two-byte nukta_varNa with corresponding one-byte nukta varNas.
modified_substring = modified_substring.replace ( /क़/g , "क़" )  ; 
modified_substring = modified_substring.replace ( /ख़‌/g , "ख़" )  ;
modified_substring = modified_substring.replace ( /ग़/g , "ग़" )  ;
modified_substring = modified_substring.replace ( /ज़/g , "ज़" )  ;
modified_substring = modified_substring.replace( 'ज' + '्' + '़' , 'ज़्' ) ;
modified_substring = modified_substring.replace ( /ड़/g , "ड़" )  ;
modified_substring = modified_substring.replace ( /ढ़/g , "ढ़" )  ;
modified_substring = modified_substring.replace ( /ऩ/g , "ऩ" )  ;
modified_substring = modified_substring.replace ( /फ़/g , "फ़" )  ;
modified_substring = modified_substring.replace ( /य़/g , "य़" )  ;
modified_substring = modified_substring.replace ( /ऱ/g , "ऱ" )  ;


//"िं",	"Ç" ,

// "ीं" ,	"È" ,

// "ीZ" ,	"Ê" ,
// "ैंZ" ,	"\›" ,
// "ैंZ" ,	"õ" ,
// "ंZ" ,	"±"  ,
// "Æ" ,	"र्f" ,
// "É" ,	"र्Ç" ,


// These two to avoid conversion of र् into Z.
modified_substring = modified_substring.replace ( /त्र्/g , "«" )  ; 
modified_substring = modified_substring.replace ( /श्र्/g , "Üz" )  ;
 
modified_substring = modified_substring.replace( /र्/g , "Z" ) ;

modified_substring = modified_substring.replace ( /«/g , "त्र्" )  ; 
modified_substring = modified_substring.replace ( /Üz/g , "श्र्" )  ; 

// following statements for adjusting postion of i maatraas.

modified_substring = modified_substring.replace( /िं/g , "Ç" ) ;
modified_substring = modified_substring.replace( /ि/g , "f" ) ;

modified_substring = modified_substring.replace( /([कखगघङचछजझञटठडड़ढढ़णतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])([Çf])/g , "$2$1" ) ;

modified_substring = modified_substring.replace( /([कखगघङचछजझञटठडड़ढढ़णतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])(्)([Çf])/g , "$3$1$2" ) ;

modified_substring = modified_substring.replace( /([कखगघङचछजझञटठडड़ढढ़णतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])(्)([Çf])/g , "$3$1$2" ) ;

modified_substring = modified_substring.replace( /Zf/g , "Æ" ) ;
modified_substring = modified_substring.replace( /ZÇ/g , "É" ) ;


// **************

//following three statement for adjusting position of reph ie, half r .


modified_substring = modified_substring.replace( /Z([कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])([्])/g , "$1$2Z" ) ;

modified_substring = modified_substring.replace( /Z([कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])([्])/g , "$1$2Z" ) ;

modified_substring = modified_substring.replace( /Z([कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])([ाॅीुूृेैोौंँ]*)/g , "$1$2Z" ) ;

modified_substring = modified_substring.replace( /ीZ/g , "Ê" ) ;
modified_substring = modified_substring.replace( /ैंZ/g , "õ" ) ;
modified_substring = modified_substring.replace( /ंZ/g , "±" ) ;

/*

//rem changing व to क  and प to फ etc

modified_substring = modified_substring.replace( /क([ुूृॄेैं&ँ]*)/g , "ke$1À" );

modified_substring = modified_substring.replace( /क्र([ुूृॄेैं&ँ]*)/g , "ke´$1À" );

modified_substring = modified_substring.replace( /फ([ुूृॄेैं&ँ]*)/g , "He$1À" );

modified_substring = modified_substring.replace( /फ्र([ुूृॄेैं&ँ]*)/g , "He´$1À" );
*/

// Halanta after which there is no constant but space, hypen, comma or full-stop etc
modified_substring = modified_substring.replace ( /[्]([ \,\;\.।\n\-\:])/g , "~$1" ) ;	   


// Now substitute Roman symbols for corresponding Devanagari symbols given in array_one.

        for( input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx = input_symbol_idx + 2 )
           {
            idx = 0  ;  // index of the symbol being searched for replacement

            while (idx != -1 ) //whie-00
               {
                modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_one[input_symbol_idx + 1] )
                idx = modified_substring.indexOf( array_one[input_symbol_idx] )
               } // end of while-00 loop
           } // end of for loop

        } // end of IF  statement  meant to  supress processing of  blank  string.
		
modified_substring = modified_substring.replace( /Zks/g , "ksZ" ) ; 
modified_substring = modified_substring.replace( /~ Z/g , "Z~" ) ; 
modified_substring = modified_substring.replace( /Zk/g , "kZ" ) ; 

    } // end of the function  Replace_Symbols( )

  } // end of Convert_Unicode_to_Krutidev010 function