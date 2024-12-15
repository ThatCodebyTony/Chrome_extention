#include "Number.h"
#include <iostream>
using namespace std;

Number::Number(int number) {
	num = number;
}

void Number::SetNum(int number) {
	num = number;
}

int Number::GetNum() {
	return num;
}

ostream& operator<<(ostream &out, const Number& n) {
    // Print the value stored in the 'num' member of the Number object
    out << "The value is " << n.num << endl;
    return out;  // Return the output stream for chaining
}