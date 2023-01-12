function threeSum(arr, target) {
  //your code here
	arr.sort(function(a,b){return a-b});
	let n=arr.length;
	let least_sum=arr[0]+arr[1]+arr[2];
	let least_diff=target-least_sum;
	least_diff=(least_diff>=0)?least_diff:-least_diff;
	let i=0,j=1,k=2;
	while(i<n && j<n && k<n){
		// console.log(arr[i], arr[j], arr[k]);
		let curr_sum=arr[i]+arr[j]+arr[k];
		let curr_diff=target-curr_sum;
		curr_diff=(curr_diff>=0)?curr_diff:-curr_diff;
		if(curr_diff<least_diff){
			least_diff=curr_diff;
			least_sum=curr_sum;
		}
		if(curr_sum==target){
			return least_sum;
		}else{
			if(k<n-1){
				k++;
			}else if(j<n-2){
				j++;
				k=j+1;
			}else{
				i++;
				j=i+1;
				k=j+1;
			}
		}
		// console.log(least_sum);
	}
	return least_sum;
}

module.exports = threeSum;
