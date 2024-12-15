#include <iostream>
using namespace std;

class IntNode {
   public:
      IntNode(int value) {
         numVal = new int;
         *numVal = value;
      } 
      IntNode(const IntNode& origObject) {
         numVal = new int;
         *numVal = *(origObject.numVal);
      } 
      ~IntNode() {
         delete numVal;
      } 
      void SetNumVal(int val) { *numVal = val; }
      int GetNumVal() { return *numVal; }
   private:
      int* numVal;
};

int main() {
   IntNode node1(1);
   IntNode node2 = node1;

   node1.SetNumVal(6);
   cout << node2.GetNumVal() << " " << node1.GetNumVal() << endl;

   return 0;
}
// When you write IntNode node2 = node1;, it calls the copy constructor, 
// which creates a new integer for node2 and copies the value stored in node1 into it (this is a deep copy).
// After that, when you change the value of node1 with node1.SetNumVal(5);
//, it only changes the value in node1's number. The value in node2 doesn't change because node2 has its own separate copy of the number.
// So, node1.GetNumVal() and node2.GetNumVal() will return different values.


//----------------------------------------------

// Copy Constructor for a Class with Pointers

AnimalColony::AnimalColony(const AnimalColony& og) {
   cout << "Deep copied AnimalColony" << endl;
   pop = new int;
   *pop = *(og.pop);  // Correctly copying the population value
   rate = new double;
   *rate = *(og.rate);  // Correctly copying the rate value
}

// ---- full code below ----

#include <iostream>
#include <iomanip>
using namespace std;

class AnimalColony {
   public:
      AnimalColony(int startingPop = 0, double startingRate = 0.0);
      AnimalColony(const AnimalColony& col);
      void SetPop(int newPop);
      void SetRate(double newRate);
      int GetPop() const;
      double GetRate() const;
      void Print() const;
   private:
      int* pop;
      double* rate;
};

AnimalColony::AnimalColony(int startingPop, double startingRate) {
   pop = new int(startingPop);
   rate = new double(startingRate);
}

AnimalColony::AnimalColony(const AnimalColony& og) {
   cout << "Deep copied AnimalColony" << endl;
   pop = new int;
   *pop = *(og.pop);
   rate = new double;
   *rate = *(og.rate);
}
void AnimalColony::SetPop(int newPop) {
   *pop = newPop;
}

void AnimalColony::SetRate(double newRate) {
   *rate = newRate;
}

int AnimalColony::GetPop() const {
   return *pop;
}

double AnimalColony::GetRate() const {
   return *rate;
}

void AnimalColony::Print() const {
   cout << *pop << " lions with " << fixed << setprecision(2) << *rate << " rate of growth" << endl;
}

void SimulateGrowth(AnimalColony c, int months) {
   for (auto i = 1; i <= months; ++i) {
      c.SetPop(c.GetPop() * (c.GetRate() + 1.0));
      cout << "After " << i << " month(s): " <<  c.GetPop() << " lions" << endl;
   }
}

int main() {
   int pop;
   double rate;

   cin >> pop;
   cin >> rate;

   AnimalColony myAnimalColony(pop, rate);
   AnimalColony myAnimalColonyCopy = myAnimalColony;
   myAnimalColony.SetRate(rate + 1.0);
   
   cout << "Initial population size: ";
   myAnimalColony.Print();
   SimulateGrowth(myAnimalColony, 3);
   cout << endl;
   cout << "Custom value interest rate" << endl;
   myAnimalColonyCopy.Print();

   return 0;
}


//----------------------------------------------
// putting an if statement to prevent self-assignment in the copy assignment operator

#include <iostream>
using namespace std;

class MyClass {
public:
    MyClass(int val);
    ~MyClass();
    MyClass& operator=(const MyClass& other);  // Copy assignment operator
    
    void SetData(int val);
    int GetData() const;

private:
    int* data;
};

// Constructor: Allocates memory and initializes the value
MyClass::MyClass(int val) {
    data = new int;
    *data = val;
}

// Destructor: Frees allocated memory
MyClass::~MyClass() {
    delete data;
}

// Copy Assignment Operator: Performs a deep copy
MyClass& MyClass::operator=(const MyClass& other) {
    if (this != &other) {  // Prevent self-assignment
        delete data;  // Free existing memory
        data = new int;  // Allocate new memory
        *data = *other.data;  // Copy data from the other object
    }
    return *this;
}

// Set the value of data
void MyClass::SetData(int val) {
    *data = val;
}

// Get the value of data
int MyClass::GetData() const {
    return *data;
}

int main() {
    MyClass obj1(10);  // Initialize obj1 with value 10
    MyClass obj2(20);  // Initialize obj2 with value 20

    obj2 = obj1;  // Assign obj1 to obj2 using overloaded assignment operator

    cout << "obj1 data: " << obj1.GetData() << endl;  // Should print 10
    cout << "obj2 data: " << obj2.GetData() << endl;  // Should print 10

    return 0;
}
