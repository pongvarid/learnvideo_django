# Generated by Django 3.1.1 on 2020-09-11 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_auto_20200910_1341'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='link',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='video',
            name='link_video',
            field=models.CharField(default='ff', max_length=255),
            preserve_default=False,
        ),
    ]