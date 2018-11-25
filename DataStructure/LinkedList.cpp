// ####################################################################
//
// file    : LinkedList.cpp
// author  :
// mailto  : ccsalison@gmail.com
// date    : 11/25/2018
// usage   : g++ -o LinkedList LinkedList.cpp; ./LinkedList;
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
		//Node *next = head;
		while(head != NULL){
			DeleteEndVal();
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

	// delete value from the end of the list
	int DeleteEndVal(){
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
	AlisonList.DeleteEndVal();
	AlisonList.AppendValue(3);
	AlisonList.PrintList();
	AlisonList.DeleteEndVal();
	AlisonList.PrintList();
	AlisonList.AppendValue(7);
	AlisonList.AppendValue(9);
	AlisonList.PrintList();
	AlisonList.DeleteEndVal();
	AlisonList.PrintList();
	AlisonList.PrependValue(11);


	AlisonList.PrintList();
	return 0;
}