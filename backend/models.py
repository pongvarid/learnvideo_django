from django.db import models
from ckeditor.fields import RichTextField
from django.contrib.auth.models import User

# Create your models here.
class About(models.Model):
    title = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    beta = models.BooleanField(default=True)
    body = RichTextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return '{}|{}'.format(self.title,self.text)

class Video(models.Model):
    name = models.CharField(max_length=255)
    body = RichTextField()
    image = models.FileField(upload_to='cover/', null=True, verbose_name="video image") 
    link = models.BooleanField(default=True)
    link_video = models.CharField(max_length=255) 
    video = models.FileField(upload_to='videos/', null=True, blank=True, verbose_name="Video File")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return '{}'.format(self.name)

class Exercise(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return '{} - {}'.format(self.video.name,self.name)

class AskAnswer(models.Model):
    ANSWERS = (
        ('0', 'A'),
        ('1', 'B'),
        ('2', 'C'),
        ('3', 'D'),
    )
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    ask = models.CharField(max_length=255)
    ans1 = models.CharField(max_length=255)
    ans2 = models.CharField(max_length=255)
    ans3 = models.CharField(max_length=255)
    ans4 = models.CharField(max_length=255)
    answer = models.CharField(max_length=1, choices=ANSWERS)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return '{} - {}'.format(self.exercise.name,self.ask)

class ScoreHistory(models.Model):
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return '{} - {}'.format(self.user.first_name,self.user.last_name,)
