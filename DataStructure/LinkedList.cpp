// ####################################################################
//
// file    : LinkedList.cpp
// author  :
// mailto  : ccsalison@gmail.com
// date    : 11/25/2018
// usage   : g++ -o LinkedList LinkedList.cpp; ./LinkedList;
// notes   : 1) https://stackoverflow.com/questions/53472700/can-i-call-a-public-function-in-a-destructor-to-free-memory
// 
// 
// ####################################################################

#include <iostream>
using namespace std;

class LinkedList{

private:
	struct Node{
		int data;
		Node *next;
	};

	
// public member
public:
	Node *head;
	Node *tail;

	// constructor
	LinkedList(){
		head = NULL; //Set head to null
		tail = NULL;
	}

	// destructor
	~LinkedList(){
		while(head != NULL){
			DeleteHead();
		}
	}

	// Check list is empty
	bool CheckListEmpty (){
		if (tail == NULL){return true;}
		else{return false;}
	}

	// add value at end of list
	void AppendValue(int val){
		// if empty list
		if (head == NULL){
			Node *n = new Node();
			n->data = val;
			n->next = NULL;
			head = n;
			tail = n;
		}
		else{
			Node *n = new Node();
			n->data = val;
			tail->next = n;
			n->next = NULL;
			tail = n;

		}
	}

	
	// add value at the beginning of the list
	void PrependValue(int val){
		Node *n = new Node();
		n->data = val;
		n->next = head;
		head = n;
	}

	int DeleteHead(){
		if(CheckListEmpty() == true){
			cout << "Empty list. Nothing to delete." << endl;
			return -1;
		}
		else{
			int val = head->data;
			Node *cur = head;
			head = head->next;
			free(cur);
			return val;
		}

	}

	// delete value from the end of the list
	// Note: cannot be called in destructor because will be O(n*n)
	//       just to delete the nodes (see note 1)
	int DeleteTail(){
		if(CheckListEmpty() == true){
			cout << "Empty list. Nothing to delete." << endl;
			return -1;
		}
		else{
			int val;
			Node *prev;
			Node *cur;
			if(head->next == NULL){
				val = tail->data;
				// EXPERIMENT cout << head->data << endl; 
				// EXPERIMENT cout << tail->data << endl;
				head = NULL;
				tail = NULL; 

			}
			else{
				prev = head;
				cur = head->next;
				while (cur->next != NULL){
					prev = prev->next;
					cur = cur->next;
					val = cur->data;
				}
				prev->next = NULL;
				free(cur);
			}
			return val;
		}
	}

	void PrintList(){
		if(CheckListEmpty() == true){
			cout << "Empty list. Nothing to print." << endl;
		}
		else{
			Node * cur;
			cur = head;
			while(cur != NULL){
				cout << cur->data;
				if (cur-> next != NULL){
					cout << " -> ";
				}
				cur = cur->next;
			}
			cout << endl;
		}
	}
};

int main(){
	LinkedList AlisonList;
	AlisonList.PrintList();
	AlisonList.DeleteTail();
	AlisonList.AppendValue(3);
	AlisonList.PrintList();
	AlisonList.DeleteTail();
	AlisonList.PrintList();
	AlisonList.AppendValue(7);
	AlisonList.AppendValue(9);
	AlisonList.PrintList();
	AlisonList.DeleteTail();
	AlisonList.PrintList();
	AlisonList.PrependValue(11);
	AlisonList.PrependValue(13);
	AlisonList.PrependValue(15);
	AlisonList.PrintList();
	AlisonList.DeleteHead();


	AlisonList.PrintList();
	return 0;
}