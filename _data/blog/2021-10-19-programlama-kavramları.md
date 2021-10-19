---
template: BlogPost
path: /programlama-kavramlari
date: 2021-10-19T22:57:07.158Z
title: Programlama Kavramları
metaDescription: >-
  Değişken, operatör, veri türleri, koşul ve döngü gibi kavramların
  açıklamalarını bu yazıda bulabilirsiniz.
thumbnail: /assets/computer-programming.jpg
---
**Programlama Kavramları**

Derslere başlamadan önce kavramları bilmeniz, en azından aşina olmanız çok önemli. 

1. **Program ve Programlama Nedir?**

   * *Program*

     * Belirli şartlar ve düzene göre yapılması öngörülen işlemlerin bütünü.
     * Bilgisayara bir işlemi yaptırmak için yazılan komutlar dizisi.
   * *Programlama*

     * Bir amaca hizmet etmesi için oluşturulan algoritmanın bir programlama dilinde yazılarak bilgisayar tarafından işlenmesine programlama denir.

   bknz: [Bilgisayar Programcılığı - 101](https://yberktarzan.netlify.app/bilprog101)


2. **Compiler (Derleyici) Nedir?**

   Compiler (Derleyici), geliştiricilerin herhangi bir programlama dilini kullanarak yazdığı kaynak kodu bilgisayarın anlayabileceği makine diline yani 0 ve 1’lere çeviren aracı yazılımdır.


3. **IDE (Entegre Geliştirme Ortamı)**

   Integrated Development Environment’in kısaltması olan IDE, yazılımcıların daha kolay bir şekilde uygulama kodlayabilmesi için geliştirilen yazılımlardır.

   bknz:[ En İyi IDE Editörleri](https://yberktarzan.netlify.app/en-iyi-ideler)


4. **Değişken Nedir?**

   Değişken, değişken verilerin tutulmuş olduğu çeşitli hücrelere verilen isimdir. Değişkenler programı oluşturan kişinin vereceği isme göre farklılık gösterebilir.


5. **Operatörler**

   Programlama dillerinde tek başlarına herhangi bir anlamı olmayan ancak programın işleyişine katkıda bulunan karakter ya da karakter topluluklarına operatör denir.

   bknz: [C Dilinde Operatörler](c-dili-operatorler)


6. **Veri Türleri Nedir?**

   Program çalıştırıldığında verileri bellekte saklamak ve bu verileri üzerinde işlem yapabilmek için tanımlı belli veri türleri vardır.

   * ***integer***: Tamsayı değer içeren bir veri türüdür.
   * ***float***: Büyük ve ondalıklı sayılar tanımlanabilen veri türüdür. 
   * ***string:*** Karakter dizileri tanımlanabilen bir veri türüdür alfanümerik(metin) veriler. 
   * ***boolean*:** true (Doğru) veya false (Yanlış) değeri alabilen bir veri türüdür. 
   * ***array:*** Çok sayıda değişkeni içeren bir veri kümesidir.
7. ```c
   // C Dilinde Veri Türleri Örnekleri 

   // Tam Sayı
   int yas = 18; 
   // Float
   float ortalama = 18.50; 
   /* String (C dilinde string'ler asıl veri türlerinden birisi değildir.) */ 
   char yazi[20] ;
   yazi[] = "Merhaba C" ;
   /* Boolean (C Dili boolean yapısına sahip değil.) */
   bool isActiveFunction = false;
   int main(){
      if(isActiveFunction != true) return;
        return 0;
   }
   //Array
   int idizi[5] = { 1, 2, 3, 4, 5 }; 
   char cdizi[8] = { 'D', 'i', 'z', 'i', 'l', 'e', 'r', '\0' };
   char cdizi[8] = "Diziler";
   ```
8. **Koşullu (Conditional) İfade Nedir?**

   Belirli işlem satırlarının istenen koşullar sağlandığında çalışması gerektiğinde ***Program Kontrol Terimleri*** adı verilen yapılar kullanırız.

   * **If:** Koşula bağlı işlem satırı veya satırları çalıştırma olanağı sağlayan deyim, eğer.
   * **Else:** else deyimi tek başına değil sadece if deyimi ile birlikte ve if deyiminin peşinden kullanılır, değilse.

```c
#include <stdio.h> 
int main(void){
int a=5, b=3; 
if(a > b)
printf("A buyuktur"); 
else
printf("B buyuktur");}
```

7. **Döngüler**

   Tek bir işlem satırını veya kod bloğunu bir defadan fazla çalıştırmak için tekrar yazmak yerine, daha pratik bir uygulama olan döngü kavramını kullanılır.

   bknz: [C Dilinde Döngüler](https://yberktarzan.netlify.app/c-donguler)
