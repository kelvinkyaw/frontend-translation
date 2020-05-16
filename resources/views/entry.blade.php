@extends('welcome')
@section('title', 'Entry')

@section('content')
{{__('Hello World, greething from LittleLives')}}
@endsection

@section('bodytitle')
Welcome back {{$name}}
@endsection