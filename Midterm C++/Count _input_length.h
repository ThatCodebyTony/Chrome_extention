#include <iostream>
#include <string>
using namespace std;

int main() {
   string userText;
   int count = 0;
   
   getline(cin, userText);  // Gets entire line, including spaces. 

   for (unsigned int i = 0; i < userText.length();i++){
      if (userText[i] != ' ' && userText[i] != '.' && userText[i] != '!' && userText[i] != ',') {
    count++;
}
   }
   cout << count << endl;

   return 0;
}
