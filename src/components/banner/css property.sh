css property
position: relative (default) | fixed | absolute

install git

1. Robin will be create a develop git branch
2. for each jira, you need to create a git branch that branch off from develop branch
3. for each jira, you need to create a pull request that fulfill the jira


JIRA 1: slider

JIRA 2: create a new menu: cannabis
1) move to div
<div name='random-cannabis'>
<ul> https://random-data-api.com/api/cannabis/random_cannabis?size=10


</ul>
<button onclick={fireGetCannabis()}>get random cannabis</button>



<input type='text'/> //size=100
<button>get specific number cannabis</button>
</div>


function fireGetCannabis() : promise {
    return ajax.get('https://random-data-api.com/api/cannabis/random_cannabis?size=10') // ajax return promise
}

fireGetCannabis().then(handleResponse)

use react-redux if you need to

JIRA 3: (Bonus) pagination 

totalCount: total display
pagination: # of display per page
page: totalCount / pagination

JIRA 4: 10 15 100 1000
should we request 1000 items at once?


Interview question:
can you give an example that you refactor an exisitng application?
can you give that you improve performance?








