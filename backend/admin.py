from django.contrib import admin
 
from .models import About, Video, Exercise, AskAnswer, ScoreHistory

admin.site.register(Video)
admin.site.register(Exercise)
admin.site.register(AskAnswer)
admin.site.register(ScoreHistory)
admin.site.register(About)





