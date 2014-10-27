function showNumberWithAnimation(i,j,randNumber)
{
	var numberCell=$('#number-cell-'+i+'-'+j);
	numberCell.css('background-color',getNumBackgroundcolor(randNumber));
	numberCell.css('color',getNumcolor(randNumber));
	numberCell.text(randNumber);

	numberCell.animate({
		 width:cellSideLength,
        height:cellSideLength,
		top:getTop(i,j),
		left:getLeft(i,j)
	},50)
}


function showMoveAnimation(fromx,fromy,tox,toy)
{
	var numberCell=$('#number-cell-'+fromx+'-'+fromy);
	numberCell.animate({
		top:getTop(tox,toy),
		left:getLeft(tox,toy)
	},200);
}

function updateScore( score ){
	$("#score").text(score);
}