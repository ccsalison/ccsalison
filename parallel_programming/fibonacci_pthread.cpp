/*
Title          : Summation with Pthread
Command to run : g++ pthread_part1a.cpp -o part1a.out -lpthread 

A Pthread program illustrating how to create a simple thread and some of the Pthread API.
This program implements the summation function where the summation operation is run as a separate thread.
*/

#include <pthread.h>
#include <cstdlib>
#include <stdio.h>

#define MAX 46
int fib[MAX]; /* this data is shared by the thread(s) */

void *runner(void *param); /* the thread */

int main(int argc, char *argv[])
{
	pthread_t tid; /* the thread identifier */
	pthread_attr_t attr; /* set of attributes for the thread */

	if (argc != 2) {
		fprintf(stderr,"usage: part1a.out <integer value>\n");
		/*exit(1);*/
		return -1;
	}

	if ((atoi(argv[1]) < 1) || (atoi(argv[1]) > 45)){
		fprintf(stderr,"Argument %d must be an integar from 1 to 45.\n",atoi(argv[1]));
		/*exit(1);*/
		return -1;
	}

	/* get the default attributes */
	pthread_attr_init(&attr);

	/* create the thread */
	pthread_create(&tid,&attr,runner,(void *) argv[1]);

	/* now wait for the thread to exit */
	pthread_join(tid,NULL);

	int max = atoi((char *)argv[1]);

	printf("Fibonacci sequence for n = %d:\n", max);
	for(int i = 0; i <= max; i++){
		printf("%d", fib[i]);
		if(i != max)
			printf(", ");
	}
	printf("\n");

}

/**
 * The thread will begin control in this function
 */
void *runner(void *param) {
	int i, upper = atoi((char *)param);

 	fib[0] = 0;
 	fib[1] = 1;

 	if (upper > 0){
 		for (i = 2; i <= upper; i++){
 			fib[i] = fib[i-2] + fib[i-1];
 		}
 	}

	pthread_exit(0);
}
