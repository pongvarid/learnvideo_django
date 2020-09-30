from django.conf.urls import include, url
from backend import views


urlpatterns = [

  url(r'^about/(?P<id>[0-9]+)/$', views.AboutAPIView.as_view()),
  url(r'^about/$', views.AboutAPIListView.as_view()),

  url(r'^video/(?P<id>[0-9]+)/$', views.VideoAPIView.as_view()),
  url(r'^video/$', views.VideoAPIListView.as_view()),

  url(r'^exercise/(?P<id>[0-9]+)/$', views.ExerciseAPIView.as_view()),
  url(r'^exercise/$', views.ExerciseAPIListView.as_view()),

  url(r'^askanswer/(?P<id>[0-9]+)/$', views.AskAnswerAPIView.as_view()),
  url(r'^askanswer/$', views.AskAnswerAPIListView.as_view()),

  url(r'^scorehistory/(?P<id>[0-9]+)/$', views.ScoreHistoryAPIView.as_view()),
  url(r'^scorehistory/$', views.ScoreHistoryAPIListView.as_view()),

]
