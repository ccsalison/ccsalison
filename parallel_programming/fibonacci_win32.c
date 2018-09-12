/*
Title          : Summation with Win32 thread

A Win32 thread program illustrating how to sum the fibonacci series in parallel.
*/

#include <Windows.h>
#include <stdio.h>

#define MAX 46
DWORD fib[MAX];
 //data is shared by the thread(s)

 //the thread runs in this separate function


DWORD WINAPI Fibonacci(LPVOID Param) {

    DWORD Upper = *(DWORD *) Param;
    fib[0] = 0;
    fib[1] = 1;
    for (DWORD i = 2; i <= Upper; i++)
        fib[i] = fib[i-2] + fib[i-1];
    return 0;
}
int main(int argc, char *argv[])
{


    DWORD ThreadId;
    HANDLE ThreadHandle;
    int Param;
    // perform some basic error checking

    if (argc != 2) {
        fprintf(stderr, "An integer parameter is required.\n");
        return -1;
    }
    Param = atoi(argv[1]);
    if ((Param < 1) || (Param > 45)) {
        fprintf(stderr, "An integer from 1 to 45 is required.\n");
        return -1;
    }
    // create the thread
    ThreadHandle = CreateThread(
        NULL, // default security attributes
        0, // default stack size
        Fibonacci, // thread function
        &Param, // parameter to thread function
        0, // default creation flags
        &ThreadId); // returns the thread identifier
    if (ThreadHandle != NULL) {

        // now wait for the thread to finish
        WaitForSingleObject(ThreadHandle, INFINITE);
        // close the thread handle
        CloseHandle(ThreadHandle);

        int max = atoi(argv[1]);
        printf("Fibonacci sequence for n = %d:\n", max);
        for(int i = 0; i <= max; i++){
            printf("%lu", fib[i]);
            if(i != max)
                printf(", ");
        }
        printf("\n");
    }

    return 0;
}
