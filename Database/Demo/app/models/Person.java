package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
/**
 * Created by HanZhang on 3/20/15.
 */
public class Person extends Model {

    @Id
    public Integer id;
    public String name;

}
