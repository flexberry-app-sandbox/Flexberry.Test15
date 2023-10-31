package Test15.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test15.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: city
 */
@Entity(name = "IISTest15city")
@Table(schema = "public", name = "City")
public class city {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Город")
    private String город;

    @Column(name = "ПлощадьГ")
    private Integer площадьг;


    public city() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getГород() {
      return город;
    }

    public void setГород(String город) {
      this.город = город;
    }

    public Integer getПлощадьГ() {
      return площадьг;
    }

    public void setПлощадьГ(Integer площадьг) {
      this.площадьг = площадьг;
    }


}