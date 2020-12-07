const knex = require('knex');
const dbConfig = require('./db-config').config;
const db = knex(dbConfig);

exports.database = class Database{
    constructor(text){
        this.text = text;
    }

    push(callBack){
        db('todo_list').returning('*').insert({
            text : this.text,
        }).then(data=>{
            callBack(data);
        });
    }

    static getList(callback){
        db.select('*').from('todo_list').then(data=>{
            callback(data);
        });
    }

    static deleteList(id, callback){
        db('todo_list').where('id',id).del().then(data=>{
            callback(data);
        });
    }

    static updateList(id, note, callback){
        db('todo_list').where('id',id).update({'text': note}).then(data=>{
            callback(data);
        })
    }
}