from rest_framework.serializers import ModelSerializer
from backend.models import About, Video, Exercise, AskAnswer, ScoreHistory


class AboutSerializer(ModelSerializer):

    class Meta:
        model = About
        fields = '__all__'


class VideoSerializer(ModelSerializer):

    class Meta:
        model = Video
        fields = '__all__'


class ExerciseSerializer(ModelSerializer):

    class Meta:
        model = Exercise
        fields = '__all__'


class AskAnswerSerializer(ModelSerializer):

    class Meta:
        model = AskAnswer
        fields = '__all__'


class ScoreHistorySerializer(ModelSerializer):

    class Meta:
        model = ScoreHistory
        fields = '__all__'
