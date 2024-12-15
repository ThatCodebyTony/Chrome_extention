//Generic Swap using Templates

#include <iostream>
using namespace std;

// Template function to swap two values
template <typename T>
void Swap(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    // Swapping two integers
    int x = 5, y = 10;
    cout << "Before Swap: x = " << x << ", y = " << y << endl;
    Swap(x, y);  // Using template for integers
    cout << "After Swap: x = " << x << ", y = " << y << endl;

    // Swapping two doubles
    double a = 3.14, b = 2.71;
    cout << "Before Swap: a = " << a << ", b = " << b << endl;
    Swap(a, b);  // Using template for doubles
    cout << "After Swap: a = " << a << ", b = " << b << endl;

    return 0;
}



//-----------------------------------------------------------
// Template function to compare two values
#include <iostream>
using namespace std;

template <typename T>
bool Compare(T a, T b) {
    return a == b;
}


//Generic Comparison using Template
int main() {
    // Compare two integers
    int x = 10, y = 10;
    if (Compare(x, y)) {
        cout << "x and y are equal" << endl;
    } else {
        cout << "x and y are not equal" << endl;
    }

    // Compare two doubles
    double a = 3.14, b = 2.71;
    if (Compare(a, b)) {
        cout << "a and b are equal" << endl;
    } else {
        cout << "a and b are not equal" << endl;
    }

    // Compare two strings
    string str1 = "Hello", str2 = "Hello";
    if (Compare(str1, str2)) {
        cout << "str1 and str2 are equal" << endl;
    } else {
        cout << "str1 and str2 are not equal" << endl;
    }

    return 0;
}
