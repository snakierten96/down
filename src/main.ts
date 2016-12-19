import * as request from 'request';
import { Observable } from 'rxjs/Rx';

const url = 'http://www.trixanbody.com.au/category/womens-swimwear-a/dress-size/womens-10/howMany/200';

request(url,(err,res,body) => {
  if (err) throw err;

  console.log(body);
});
