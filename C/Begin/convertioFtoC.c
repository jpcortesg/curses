#include <stdio.h>

int main(void)
{
    int fahrenheit, celsius;

    printf("Please enter fahrenheit as in Integer: ");
    scanf("%d", &fahrenheit);
    celsius = (fahrenheit - 32)/1.8; // Note convertion
    printf("\n %d fahrenheit is %d celsius.\n", fahrenheit, celsius);

    return 0;
}
