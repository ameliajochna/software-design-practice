const modA = require('./modA.cjs');

modA.HelloWorld();

/*
tak, moduł A importuje moduł B, a moduł B importuje moduł A.

W CommonJS cykle modułów są łatwiejsze do obsłużenia, ponieważ require są rozwiązywane dynamicznie w trakcie wykonywania kodu.

W commonJS Node zwroci czesciowy modul, w ESM dostaniemy najprawdopodbniej blad/ostrzezenie
*/