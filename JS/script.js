// // document.getElementById("demo").innerHTML = "Hello World!";

let a, b, c, d, l, r, r1, r2, s, t, v, sm, m, n, kg, km, bayt;
// begin1
a = +prompt(
  "Kvadratning perimetrini hisoblovchi dastur ishga tushdi. A ga qiymat bering:"
);
p = a * 4;
alert("Kvadratning perimetri: " + p + " ga teng");

// begin2
a = +prompt(
  "Kvadratning yuzasini hisoblovchi dastur ishga tushdi. a ga qiymat bering:"
);
s = a ** 2;
alert("Kvadratning yuzasi: " + s + " ga teng");

// begin3
a = +prompt(
  "To'g'ri burchakning perimetri va  yuzasini  hisoblovchi dastur ishga tushdi. To'g'ri to'rtburchakni tomonlari a ga qiymat bering:"
);
b = +prompt("b ga qiymat bering:");

p = 2 * (a + b);
s = a * b;
alert("To'g'ri burchakning perimetri: " + p + " ga teng");
alert("To'g'ri burchakning yuzasi: " + s + " ga teng");

// begin4;
d = +prompt(
  "Aylananing uzunligini hisoblovchi dastur ishga tushdi. Uning diametrini kiriting:"
);
l = Math.PI ** d;
alert("Aylananing uzunligi: " + l + " ga teng");

// begin5
c = +prompt(
  "Kubning hajmi va to'la sirtini hiosblovchi dastur ishga tushdi. Uning yon tomonini kiriting: c="
);
v = c ** 3;
s = 6 * c ** 2;
alert("Kubning hajmi: " + v + "\n" + "To'la sirti: " + s);

// begin6
a = +prompt(
  "Paralellepidning hajmi va to'la sirtini hisoblovchi dastur ishga tushdi. Uning a tomonini kiriting: a="
);
b = +prompt("b = ");
c = +prompt("c = ");
v = a * b * c;
s = 2 * (a * b + b * c + a * c);
alert("Paralellepidning hajmi: " + v + "\n" + "To'la sirti: " + s);

// begin7
r = +prompt(
  "Doiraning uzunligi va yuzasini hisoblovchi dastur ishga tushdi. Uning radiusini kiriting: r="
);
l = 2 * Math.PI * r;
s = Math.PI * r ** 2;
alert("Doiraning uzunligi : " + l + "\n" + "Yuzasi: " + s);

// begin8
a = +prompt(
  "Ikkita sonning o'rta arifmetigini hisoblovchi dastur ishga tushdi. A sonni kiriting:"
);
b = +prompt("b = ");
c = (a + b) / 2;
alert("Ikkita sonning o'rta arifmetigi : " + c);

// begin13
a = +prompt(
  "Ikkita sonning o'rta arifmetigini hisoblovchi dastur ishga tushdi. A sonni kiriting:"
);
b = +prompt("b = ");
c = (a + b) / 2;
alert("Ikkita sonning o'rta arifmetigi : " + c);

//Integer1
sm = +prompt(
  "sm'ni m'ga aylantiruvchi dastur ishga tushdi. sm'ga qiymat bering. sm:"
);
alert("m = " + parseInt(sm / 100));

//Integer2
kg = +prompt(
  "kg'ni t'ga aylantiruvchi dastur ishga tushdi. kg'ga qiymat bering. kg:"
);
alert("t = " + parseInt(kg / 1000));

//Integer3
bayt = +prompt(
  "Baytni'ni Kilobayt'ga aylantiruvchi dastur ishga tushdi. bayt'ga qiymat bering. bayt:"
);
alert("Kilobayt = " + parseInt(bayt / 1000));

//Integer4
a = +prompt(
  "A kesmada B kesmadan necha marta ketishini aniqlovchi dastur ishga tushdi. Bunda A>B bo'lsin. A kesmaga qiymat bering. a:"
);
b = +prompt("b = ");
alert("B kesmaning A kesmaga joylashishi = " + parseInt(a / b));

//Integer5
a = +prompt(
  "A kesmada B kesmadan necha marta ketishini, qoldig'ini ham aniqlovchi dastur ishga tushdi. Bunda A>B bo'lsin. A kesmaga qiymat bering. a:"
);

b = +prompt("b = ");
alert("B kesmaning A kesmaga joylashishi = " + parseInt(a / b));
alert("Qoldig'i = " + (a % b));

// Integer6
n = +prompt(
  "Ikki xonali sonning oldin o'nliklar xonasini, keyin birliklar xonasini ekranga chiqaruvchi dastur ishga tushdi. Ikki xonali son kiriting. n = "
);
alert("O'nlar xonasi = " + parseInt(n / 10));
alert("Birlar xonasi = " + parseInt(n % 10));

// Integer7
n = +prompt(
  "Ikki xonali sonning raqamlar yig'indisini ekranga chiqaruvchi dastur ishga tushdi. Ikki xonali son kiriting. n ="
);
alert(
  "Ikki xonali sonning raqamlar yig'indisi = " +
    (parseInt(n / 10) + parseInt(n % 10))
);

// Integer8
n = +prompt(
  "Ikki xonali songa teskari soni ekranga chiqaruvchi dastur ishga tushdi. Ikki xonali son kiriting. n ="
);
alert(
  "Ikki xonali songa teskari soni  = " +
    (parseInt(n % 10) * 10 + parseInt(n / 10))
);

// Integer9
n = +prompt(
  "Uch xonali sonning yuzlar xonasini ekranga chiqaruvchi dastur ishga tushdi. Uch xonali son kiriting. n ="
);
alert("Uch xonali sonning yuzlar xonasi = " + parseInt(n / 100));

// Integer10
n = +prompt(
  "Uch xonali sonning oldin birliklar xonasini, keyin o'nliklar xonasini ekranga chiqaruvchi dastur ishga tushdi. Uch xonali son kiriting. n = "
);
alert("Birlar xonasi = " + parseInt(n % 10));
alert("O'nlar xonasi = " + parseInt((n % 100) / 10));

// Integer11
n = +prompt(
  "Uch xonali sonning raqamlar yig'indisini ekranga chiqaruvchi dastur ishga tushdi. Uch xonali son kiriting. n = "
);
alert(
  "Raqamlar yig'indisi = " +
    (parseInt(n / 100) + parseInt((n % 100) / 10) + parseInt(n % 10))
);

// Integer12
n = +prompt(
  "Uch xonali songa teskari soni ekranga chiqaruvchi dastur ishga tushdi. Uch xonali son kiriting. n ="
);

n1 = parseInt(n / 100);
n10 = parseInt((n % 100) / 10) * 10;
n100 = parseInt(n % 10) * 100;
alert("Uch xonali songa teskari soni  = " + parseInt(n100 + n10 + n1));
