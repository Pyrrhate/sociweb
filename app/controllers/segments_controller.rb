class SegmentsController < ApplicationController
  def index
    segments = [
      {
        :id       => 1,
        :position => 2,
        :source   => "Les chasseurs sachant chasser chassent leurs chiens dans des sachets",
        :target   => "the hunters that can hunt hunt their dogs in bags"
      },
      {
        :id       => 2,
        :position => 1,
        :source   => "bonjour monde",
        :target   => ""
      },
      {
        :id       => 3,
        :position => 0,
        :source   => "Les sanglots longs des violons de l'automne bercent mon coeur d'une langueur monotone",
        :target   => ""
      },
      {
        :id       => 4,
        :position => 3,
        :source   => "J'ai rêvé, une fois !",
        :target   => "I have a dream !"
      },
      {
        :id       => 5,
        :position => 4,
        :source   => "Ta mère est une jeune startup dans le hainaut",
        :target   => "Your mother is a young startup in Hainaut"
      }
    ]
    render :json => segments.sort { |segment1, segment2| segment1[:position] <=> segment2[:position] }
  end
end
