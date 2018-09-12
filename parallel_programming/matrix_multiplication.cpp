#include <pthread.h>
#include <cstdlib>
#include <stdio.h>

#define NUM_THREADS 9
#define M 3
#define K 2
#define N 3

/* this data is shared by the thread(s) */
int A[M][K] = {{1,4},{2,5},{3,6}};
int B[K][N] = {{8,7,6},{5,4,3}};
int C[M][N];


struct v {
	int i; /* row */
	int j; /* column */
};


void *runner(void *param); /* the thread */

int main(int argc, char *argv[])
{

	
	/* the thread identifier */
	pthread_t workers[NUM_THREADS];
	int count = 0;
	for(int i = 0; i < M; i++){
		for(int j = 0; j < N; j++){
			struct v *data = (struct v*) malloc (sizeof(struct v*));
			data->i = i;
			data->j = j;			
			/* set of attributes for the thread */
			pthread_attr_t attr;
			/* get the default attributes */
			pthread_attr_init(&attr);
			/* create the thread */
			pthread_create(&workers[count],&attr,runner,(void *) data);
			count++;
		}
	}

	/* now wait for the thread to exit */
	for(int i = 0; i < NUM_THREADS; i++)
		pthread_join(workers[i], NULL);

	// pthread_join(tid,NULL);

	printf("{");
	for(int i = 0; i < M; i++){
		printf("{");
		for(int j = 0; j < N; j++){
			printf("%d", C[i][j]);
			if(j < (N-1)){
				printf(", ");
			}
		}
		printf("}");
		if (i < (M-1))
			printf(", ");
	}
	printf("}");
}

/**
 * The thread will begin control in this function
 */
void *runner(void *param)
{
	struct v *my_data = (struct v*)param;

	int sum = 0;

	for(int k = 0; k < K; k++){
      sum += A[my_data->i][k] * B[k][my_data->j];
   	}

   	C[my_data->i][my_data->j] = sum;
	pthread_exit(0);
	return NULL;
}
