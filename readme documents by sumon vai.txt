### Problem 1 :

Given an array of numbers , find the smallest number
`const arr = [20, 60, 80, -60, -90, 40, 12, 600, 81, 1]`

<details>
<summary>Solution 1</summary>

```javaScript
const smallNumber = Math.min(...arr);
console.log(smallNumber);
```

</details>

<details>
<summary>Solution 2</summary>

```JavaScript
const ascendingOrder = arr.sort((a, b) => {
  return a - b;
});

const smallestNumber = ascendingOrder.at(0);
console.log(smallestNumber);
```

</details>

<details>
<summary>Solution 3</summary>

```JavaScript
function findSmallest(arr) {
    return arr.reduce((smallest, current) => {
        return current < smallest ? current : smallest;
    });
}
console.log(findSmallest([20, 60, 80, -60, -90, 40, 12, 600, 81, 1]));

```

</details>

<details>