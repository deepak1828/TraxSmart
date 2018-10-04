myApp.controller("MainController", ["$http","$scope","$location","$rootScope","$window","$state", function($http,$scope,$location,$rootScope,$window,$state){
        
    var apiKey = 'd9a5c5642fb6b5d3844bf5f65289ad92';

    $scope.searchMovieName = function(searchedMovie){
        $scope.loadingImage = true;
        console.log('Searched Movie', searchedMovie);
        $scope.movieName = {};
        $scope.movieSearchForm.$setPristine();
        //console.log('https://api.themoviedb.org/3/search/movie?api_key='+apiKey+'&language=en-US&query='+searchedMovie.name+'&page=1&include_adult=false');
        $http({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie?api_key='+apiKey+'&language=en-US&query='+searchedMovie.name+'&page=1&include_adult=false',
            headers: {
                'Content-Type' : "application/json"
                // 'Authorization': 'Basic ' + authorizationBasic
            }
        }).success(function(data){
            $scope.loadingImage = false;
            $scope.searchedMovieData = data;
            $scope.displaySearchData = $scope.searchedMovieData.results;
            console.log('Result data',$scope.displaySearchData);
            
        }).error(function(data){
            $scope.loadingImage = false;
            $scope.searchFail = data;
            console.log('Failed data', $scope.searchFail);
        })
    };

    $scope.getParticularMovieData = function(movieId){
        $scope.loadingImage = true;
        if(screen.width < 500 ) {
            $scope.isMobile ='true';
            $('html,body').animate({'scrollTop':$("#completeDetails").position().top});
        } else{
            $('html,body').animate({scrollTop: '50px'}, 500);
        }
        console.log('Movie Id', movieId);
        console.log('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=d9a5c5642fb6b5d3844bf5f65289ad92&language=en-US');
        $http({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/'+movieId+'?api_key=d9a5c5642fb6b5d3844bf5f65289ad92&language=en-US',
            headers: {
                'Content-Type' : "application/json"
            }
        }).success(function(data){
            $scope.loadingImage = false;
            $scope.selectedMovie = data;
            $scope.selectedMovieImage = data.poster_path;
            $scope.movieDuration = data.runtime / 60 ;
            console.log('Selected Movie',$scope.selectedMovie);
        }).error(function(data){
            $scope.loadingImage = false;
            $scope.selMovie = data;
            console.log('Selected movie fail', $scope.selMovie);
        })
    };

}]);