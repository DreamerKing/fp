import { times } from '../src/times';
import { unless } from '../src/unless';

times(100, function(n){
    unless(n % 2, function(){
        console.log(`${n} is enven`);
    });
});