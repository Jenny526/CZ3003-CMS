# Crisis Management System by Lemon Tea
<dl>
    <dt>CZ3003-CMS</dt>
    <dd>This is a system for public to know the crisis happened all around the country.</dd>

## Getting Started

To get you started you can simply clone the CZ3003-CMS repository and install the dependencies:

### Prerequisites

You need git to clone the CZ3003-CMS repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test the project. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone CZ3003-CMS

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/Rhteo/CZ3003-CMS
cd CZ3003-CMS
```


## Directory Layout

The system consists of the following independent components:

```
dengue/                --> Component to get dengue informations from Yahoo API every day
weather/               --> Component to get weather information from Yahoo API every hour
PSI/                   --> Component to get PSI readings and haze information from Yahoo API every hour

Call Center/           --> Component to allow different call operators to create/update/view pending crises and view resolved crises history
Public Web/            --> Component to show the real-time crises, weather, PSI to public users

Central control        --> Component as the central unit to handle requests from dengue/weather/PSI/Call Center/Public Web and post information to Public Web/facebook/twitter/sms/email

facebook               --> Component to update crisis information on Facebook account 
twitter                --> Component to update crisis information on Twitter account [https://twitter.com/system_cm](https://twitter.com/system_cm)

sms                    --> Component to send sms to related agents/subscribed user when new crisis received
email                  --> Component to send email to the Prime Minister office every half hour

Database               --> Component to store all related data
```

## Contact

For more information on [Crisis Management System by Lemon Tea](https://github.com/Rhteo/CZ3003-CMS) please check out [Facebook](https://www.facebook.com/pages/Crisis-Management-System/823016391097525) or [Twitter](https://twitter.com/system_cm)

[git]: http://git-scm.com/
